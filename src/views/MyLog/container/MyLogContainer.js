import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Poster from "../../../component/Poster";
import MyLogPresenterComponent from "../presenter/MyLogPresenterComponent";

const MyLogContainer = () => {
  const history = useHistory();
  const [myLog, setMyLog] = useState([]);

  const getLogData = async () => {
    await axios
      .get(`/api/v1/content/${localStorage.getItem("id")}`, {
        headers: {
          "Content-Type": `application/json`,
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setMyLog(res.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
        history.replace("/movie");
      });
  };

  useEffect(() => {
    getLogData();
  }, []);

  return (
    <MyLogPresenterComponent
      poster={
        <>
          {myLog.map((data, index) => {
            return (
              <Poster
                key={index}
                id={data.movieId}
                imgUrl={data.imgUrl}
                title={data.title}
                rating={data.rating}
                isMovie={data.contentCheck}
                myLog={true}
              ></Poster>
            );
          })}
        </>
      }
    ></MyLogPresenterComponent>
  );
};

export default MyLogContainer;
