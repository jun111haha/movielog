import React, { useState, useEffect, useRef, useCallback } from "react";
// import useIntersect from "../../utils/userIntersect";
import { tvApi } from "../../Api";
import TvPresenter from "./TvPresenter";

const TvContainer = (props) => {
  const {
    location: { pathname },
  } = props;

  const target = useRef();
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoader, setIsLoader] = useState(true);
  const [datatFinish, setDatatFinish] = useState(false);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      if (pathname === "/tv") {
        const {
          data: { results: airingTodayResult },
          data: { total_pages: totalElements },
        } = await tvApi.airingToday(page);
        setAiringToday([...airingToday, ...airingTodayResult]);
        if (page + 1 > totalElements || page === 4) setDatatFinish(true);
      } else if (pathname === "/tv/popular-tv") {
        const {
          data: { results: topPopularRequest },
          data: { total_pages: totalElements },
        } = await tvApi.popular(page);
        setPopular([...popular, ...topPopularRequest]);
        if (page + 1 > totalElements || page === 4) setDatatFinish(true);
      } else if (pathname === "/tv/top-rated") {
        const {
          data: { results: topRatedRequest },
          data: { total_pages: totalElements },
        } = await tvApi.topRated(page);
        setTopRated([...topRated, ...topRatedRequest]);
        if (page + 1 > totalElements || page === 4) setDatatFinish(true);
      }
      setLoading(false);
      setIsLoader(false);
      console.log(page);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    setPage(1);
    setDatatFinish(false);
  }, [pathname]);

  const IncreasePage = useCallback(() => {
    if (datatFinish === false) {
      setPage((prev) => prev + 1);
    }
  });

  const handleScrolling = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      IncreasePage();
    }
  });

  useEffect(() => {
    let observer;
    const { current } = target;
    if (current) {
      setIsLoader(true);
      // 관찰요소와 40%만큼 겹쳤을 때 onIntersect을 수행
      observer = new IntersectionObserver(handleScrolling, { threshold: 1 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScrolling]);

  return (
    <>
      <TvPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        location={pathname}
        target={target}
        isLoader={isLoader}
        datatFinish={datatFinish}
      />
    </>
  );
};

export default TvContainer;
