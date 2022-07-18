import React, { useState, useEffect, useRef, useCallback } from "react";
import useIntersect from "../../utils/userIntersect";
import { tvApi } from "../../Api";
import TvPresenter from "./TvPresenter";

const TvContainer = (props) => {
  const {
    location: { pathname },
  } = props;

  const intersectRef = useRef(null);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoader, setIsLoader] = useState(true);
  const [datatFinish, setDatatFinish] = useState(false);
  const [page, setPage] = useState(1);
  const { isIntersect } = useIntersect(intersectRef, {
    rootMargin: "200px",
    threshold: 1,
  });

  const loadData = async () => {
    try {
      if (pathname === "/tv" && (isIntersect || datatFinish == false)) {
        const {
          data: { results: airingTodayResult },
          data: { total_pages: totalElements },
        } = await tvApi.airingToday(page);

        setAiringToday([...airingToday, ...airingTodayResult]);
        setPage((prev) => prev + 1);
      } else if (
        pathname === "/tv/popular-tv" &&
        (isIntersect || datatFinish == false)
      ) {
        const {
          data: { results: topPopularRequest },
          data: { total_pages: totalElements },
        } = await tvApi.popular(page);

        setPopular([...popular, ...topPopularRequest]);
        setPage((prev) => prev + 1);
      } else if (
        pathname === "/tv/top-rated" &&
        (isIntersect || datatFinish == false)
      ) {
        const {
          data: { results: topRatedRequest },
          data: { total_pages: totalElements },
        } = await tvApi.topRated(page);

        setTopRated([...topRated, ...topRatedRequest]);
        setPage((prev) => prev + 1);
      }
      setLoading(false);
      setIsLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
    setIsLoader(true);
  }, [isIntersect, datatFinish]);

  useEffect(() => {
    setPage(1);
    setDatatFinish(false);
  }, [pathname]);

  return (
    <>
      <TvPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        location={pathname}
        intersectRef={intersectRef}
        isLoader={isLoader}
        datatFinish={datatFinish}
      />
    </>
  );
};

export default TvContainer;
