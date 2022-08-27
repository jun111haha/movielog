import React, { useState, useEffect, useRef } from "react";
import useIntersect from "../../../utils/userIntersect";
import TvPresenterComponent from "../presenter/TvPresenterComponent";
import { observer } from "mobx-react";
import useStores from "../../../store/useStores";
import Poster from "../../../component/Poster";
import { debounce } from "lodash";

const TvTopRatedContainer = observer(() => {
  const intersectRef = useRef(null);
  const { tvListStore } = useStores();
  const [loading, setLoading] = useState(true);
  const [isLoader, setIsLoader] = useState(true);
  const [datatFinish, setDatatFinish] = useState(false);
  const { isIntersect } = useIntersect(intersectRef, {
    rootMargin: "200px",
    threshold: 1,
  });

  const getLoadData = debounce(() => {
    if (isIntersect && datatFinish === false) {
      tvListStore.tvTopRatingPage > 6
        ? setDatatFinish(true)
        : tvListStore.getTopRatingList(tvListStore.tvTopRatingPage++);
    }

    setLoading(false);
    setIsLoader(false);
  }, 500);

  useEffect(() => {
    getLoadData();
    setIsLoader(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersect, datatFinish]);
  return (
    <>
      <TvPresenterComponent
        tv={
          <>
            {tvListStore.tvTopRatingList.map((data, index) => {
              return (
                <Poster
                  key={index}
                  id={data.id}
                  imgUrl={data.poster_path}
                  title={data.name}
                  rating={data.vote_average}
                ></Poster>
              );
            })}
          </>
        }
        loading={loading}
        intersectRef={intersectRef}
        isLoader={isLoader}
        datatFinish={datatFinish}
      />
    </>
  );
});

export default TvTopRatedContainer;
