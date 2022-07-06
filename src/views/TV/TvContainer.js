import React, { useState, useEffect } from "react";
import { tvApi } from "../../Api";
import TvPresenter from "./TvPresenter";
import { useInView } from "react-intersection-observer";

const TvContainer = (props) => {
  const {
    location: { pathname },
  } = props;

  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      const {
        data: { results: topRatedRequest },
      } = await tvApi.topRated(page);

      const {
        data: { results: topPopularRequest },
      } = await tvApi.popular(page);

      const {
        data: { results: airingToday },
      } = await tvApi.airingToday(page);

      setTopRated(topRatedRequest);
      setPopular(topPopularRequest);
      setAiringToday(airingToday);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <TvPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        location={pathname}
      />
    </>
  );
};

export default TvContainer;
