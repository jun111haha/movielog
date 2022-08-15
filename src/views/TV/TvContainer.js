import React, { useState, useEffect, useRef } from "react";
import useIntersect from "../../utils/userIntersect";
import TvPresenter from "./TvPresenter";
import { observer } from "mobx-react";
import useStores from "../../store/useStores";

const TvContainer = observer((props) => {
  const {
    location: { pathname },
  } = props;

  const intersectRef = useRef(null);
  const { tvListStore } = useStores();

  const [loading, setLoading] = useState(true);
  const [isLoader, setIsLoader] = useState(true);
  const [datatFinish, setDatatFinish] = useState(false);

  const [airingTodayPage, setAiringTodayPage] = useState(1);
  const [popularPage, setPopularPage] = useState(1);
  const [topRatingPage, setTopRatingPage] = useState(1);

  const { isIntersect } = useIntersect(intersectRef, {
    rootMargin: "200px",
    threshold: 1,
  });

  const loadData = () => {
    if (pathname === "/tv" && (isIntersect || datatFinish === false)) {
      tvListStore.getAiringTodayList(airingTodayPage);
      setAiringTodayPage((prev) => prev + 1);
      airingTodayPage >= 5 ? setDatatFinish(true) : setDatatFinish(false);
    } else if (
      pathname === "/tv/popular-tv" &&
      (isIntersect || datatFinish === false)
    ) {
      tvListStore.getPopularList(popularPage);
      setPopularPage((prev) => prev + 1);
      popularPage >= 5 ? setDatatFinish(true) : setDatatFinish(false);
    } else if (
      pathname === "/tv/top-rated" &&
      (isIntersect || datatFinish === false)
    ) {
      tvListStore.getTopRatingList(topRatingPage);
      setTopRatingPage((prev) => prev + 1);
      topRatingPage >= 5 ? setDatatFinish(true) : setDatatFinish(false);
    }
    setLoading(false);
    setIsLoader(false);
  };

  useEffect(() => {
    // let isComponentMounted = true;
    // if (isComponentMounted) {
    //   throttler.throttle(loadData, 500);
    //   setIsLoader(true);
    // }
    // return () => {
    //   isComponentMounted = false;
    // };

    loadData();
    setIsLoader(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersect, datatFinish]);

  useEffect(() => {
    setDatatFinish(false);
    setIsLoader(false);
  }, [pathname]);

  return (
    <>
      <TvPresenter
        topRated={tvListStore.tvTopRatingList}
        popular={tvListStore.tvPopularList}
        airingToday={tvListStore.tvAiringTodayList}
        loading={loading}
        location={pathname}
        intersectRef={intersectRef}
        isLoader={isLoader}
        datatFinish={datatFinish}
      />
    </>
  );
});

export default TvContainer;
