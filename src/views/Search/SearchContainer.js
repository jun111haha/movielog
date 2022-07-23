import React, { useEffect, useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { tvApi, moviesApi } from "../../Api";

const SearchContainer = (props) => {
  const [movieSearchResult, setMovieSearchResult] = useState([]);
  const [tvSearchResult, setTvSearchResult] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchEmpty, setSearchEmpty] = useState(false);

  const changeInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search != null && search !== "") {
      searchValue();
    }
  };

  const searchValue = async () => {
    setLoading(true);

    try {
      const {
        data: { results: movieSearchResult },
      } = await moviesApi.search(search);
      setMovieSearchResult(movieSearchResult);
      const {
        data: { results: tvSearchResult },
      } = await tvApi.search(search);
      setTvSearchResult(tvSearchResult);

      setLoading(false);

      movieSearchResult?.length === 0 && tvSearchResult?.length === 0
        ? setSearchEmpty(true)
        : setSearchEmpty(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SearchPresenter
      search={search}
      loading={loading}
      movieSearchResult={movieSearchResult}
      tvSearchResult={tvSearchResult}
      changeInput={changeInput}
      handleSubmit={handleSubmit}
      searchEmpty={searchEmpty}
    ></SearchPresenter>
  );
};

export default SearchContainer;
