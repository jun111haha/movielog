import React, { useState } from "react";
import styled from "styled-components";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import useConfirm from "../utils/useConfirm";
import axios from "axios";
import { BiListPlus } from "react-icons/bi";
import { BiListMinus } from "react-icons/bi";

const Container = styled.div`
  font-size: 12px;
  transition: 0.2s linear;
  width: 220px;
  margin: 12px;
  @media (max-width: 768px) {
    width: 140px;
  }
`;
const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  transition: 0.2s linear;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.35s;
    cursor: pointer;
  }
`;

const Image = styled.div`
  background: url(${(props) => props.bgUrl}) no-repeat center center;
  background-size: cover;
  height: 340px;
  transition: 0.2s linear;
  border-radius: 8px;
  @media (max-width: 768px) {
    height: 220px;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.3;
`;

const Title = styled.div`
  color: white;
  font-size: 18px;
  display: flex;
`;

const Rating = styled.div`
  font-size: 14px;
  color: #dcdcdc;
  display: flex;
`;

const InsertButton = styled(BiListPlus)`
  display: flex;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const DeleteButton = styled(BiListMinus)`
  display: flex;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Poster = ({ id, imgUrl, title, rating, isMovie, myLog }) => {
  const insertData = {
    kakaoId: localStorage.getItem("id"),
    contentId: id,
    contentUrl: imgUrl,
    contentTitle: title,
    contentRating: rating,
    contentCheck: isMovie,
  };

  const insertLog = async () => {
    await axios
      .post("/api/v1/content", JSON.stringify(insertData), {
        headers: {
          "Content-Type": `application/json`,
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        alert("내 로그에 추가돼었습니다!");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  const abort = () => console.log("Aborted");

  const insertconfirm = useConfirm(
    "내 로그에 추가하시겠습니까?",
    insertLog,
    abort
  );

  return (
    <Container>
      <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
        <ImageContainer>
          <Image
            bgUrl={
              imgUrl
                ? `https://image.tmdb.org/t/p/original/${imgUrl}`
                : require("../assets/noposter.png")
            }
          />
        </ImageContainer>
      </Link>
      <Items>
        <Title>
          {title && title.length > 15 ? `${title.substring(0, 15)}...` : title}
        </Title>
        <Rating>
          <StarRating voteAverage={rating} /> ({rating})
          {localStorage.getItem("id") && myLog ? (
            <DeleteButton />
          ) : (
            <InsertButton onClick={insertconfirm} />
          )}
        </Rating>
      </Items>
    </Container>
  );
};

export default React.memo(Poster);
