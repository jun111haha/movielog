import { action, makeObservable, observable, runInAction } from "mobx";
import { moviesApi } from "../Api";

export default class MovieListStore {
  moviePopularList = [];
  moviePopularPage = 1;
  movieUpcomingList = [];
  movieUpcomingPage = 1;
  movieNowPlayingList = [];
  movieNowPlayingPage = 1;
  movieDetailList = [];
  movieVedioList = [];
  movieSearchList = [];
  movieEmptyCheck = false;

  constructor() {
    makeObservable(this, {
      moviePopularList: observable,
      moviePopularPage: observable,
      movieUpcomingList: observable,
      movieUpcomingPage: observable,
      movieNowPlayingList: observable,
      movieNowPlayingPage: observable,
      movieDetailList: observable,
      movieVedioList: observable,
      movieSearchList: observable,
      movieEmptyCheck: observable,

      getMoviePopularList: action,
      getMovieUpcomingList: action,
      getMovieNowPlayingList: action,
      getMovieDetailList: action,
      movieDetailReset: action,
      getMovieSearchList: action,
    });
  }

  getMoviePopularList = async (page) => {
    const {
      data: { results: moviePopularRequest },
    } = await moviesApi.popular(page);

    runInAction(() => {
      this.moviePopularList = [
        ...this.moviePopularList,
        ...moviePopularRequest,
      ];
    });
  };

  getMovieUpcomingList = async (page) => {
    const {
      data: { results: movieUpcomingRequest },
    } = await moviesApi.upcoming(page);

    runInAction(() => {
      this.movieUpcomingList = [
        ...this.movieUpcomingList,
        ...movieUpcomingRequest,
      ];
    });
  };

  getMovieNowPlayingList = async (page) => {
    const {
      data: { results: movieNowPlayingRequest },
    } = await moviesApi.nowPlaying(page);

    runInAction(() => {
      this.movieNowPlayingList = [
        ...this.movieNowPlayingList,
        ...movieNowPlayingRequest,
      ];
    });
  };

  getMovieDetailList = async (id) => {
    const { data: movieDetail } = await moviesApi.movieDetail(id);

    runInAction(() => {
      this.movieDetailList = movieDetail;
    });
  };

  getMovieSearchList = async (value) => {
    const {
      data: { results: movieSearchResult },
    } = await moviesApi.search(value);

    runInAction(() => {
      this.movieSearchList = movieSearchResult;
      this.movieEmptyCheck = movieSearchResult.length > 0 ? false : true;
    });
  };

  movieDetailReset = () => {
    this.movieDetailList = [];
  };
}
