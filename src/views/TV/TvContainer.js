import React, { useState, useEffect } from "react";
import { tvApi } from "../../Api";
import TvPresenter from "./TvPresenter";

const TvContainer = (props) => {
  const {
    location: { pathname },
  } = props;

  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const {
        data: { results: topRatedRequest },
      } = await tvApi.topRated();

      const {
        data: { results: topPopularRequest },
      } = await tvApi.popular();

      // const {
      //   data: { results: netflixOriginals },
      // } = await tvApi.netflixOriginals();

      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();

      setTopRated(topRatedRequest);
      setPopular(topPopularRequest);
      setAiringToday(airingToday);
      // setNetflixOriginals(netflixOriginals);

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
