import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { observer } from "mobx-react";
import useStores from "../../store/useStores";

const SearchContainer = observer(() => {
  const { movieListStore, tvListStore } = useStores();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const changeInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search != null && search !== "") {
      searchValue();
    }
  };

  const searchValue = () => {
    setLoading(true);

    movieListStore.getMovieSearchList(search);
    tvListStore.getTvSearhList(search);
    setLoading(false);
  };

  return (
    <SearchPresenter
      search={search}
      loading={loading}
      movieSearchResult={movieListStore.movieSearchList}
      tvSearchResult={tvListStore.tvSearchList}
      changeInput={changeInput}
      handleSubmit={handleSubmit}
      movieSearchEmpty={movieListStore.movieEmptyCheck}
      tvSearchEmpty={tvListStore.tvEmptyCheck}
    ></SearchPresenter>
  );
});

export default SearchContainer;
