import React, { useState, useEffect, useRef } from "react";
import useIntersect from "../../utils/userIntersect";
import TvPresenter from "./TvPresenter";
import { observer } from "mobx-react";
import useStores from "../../store/useStores";
import { throttling } from "../../utils/useThrottling";

const TvContainer = observer((props) => {
  const {
    location: { pathname },
  } = props;

  const throttler = throttling();
  const intersectRef = useRef(null);
  const { tvListStore } = useStores();

  const [loading, setLoading] = useState(true);
  const [isLoader, setIsLoader] = useState(true);
  const [datatFinish, setDatatFinish] = useState(false);

  const [popularPage, setPopularPage] = useState(1);
  const [airingTodayPage, setAiringTodayPage] = useState(1);
  const [topRatingPage, setTopRatingPage] = useState(1);

  const { isIntersect } = useIntersect(intersectRef, {
    rootMargin: "200px",
    threshold: 1,
  });

  const loadData = () => {
    if (pathname === "/tv" && (isIntersect || datatFinish === false)) {
      tvListStore.getAiringTodayList(airingTodayPage);
      setAiringTodayPage((prev) => prev + 1);
    } else if (
      pathname === "/tv/popular-tv" &&
      (isIntersect || datatFinish === false)
    ) {
      tvListStore.getPopularList(popularPage);
      setPopularPage((prev) => prev + 1);
    } else if (
      pathname === "/tv/top-rated" &&
      (isIntersect || datatFinish === false)
    ) {
      tvListStore.getTopRatingList(topRatingPage);
      setTopRatingPage((prev) => prev + 1);
    }
    setLoading(false);
    setIsLoader(false);
  };

  useEffect(() => {
    let isComponentMounted = true;
    if (isComponentMounted) {
      throttler.throttle(loadData, 500);
      setIsLoader(true);
    }
    return () => {
      isComponentMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersect, datatFinish]);

  useEffect(() => {
    setDatatFinish(false);
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
