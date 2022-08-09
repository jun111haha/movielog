import { action, makeObservable, observable, runInAction } from "mobx";
import { moviesApi } from "../Api";

export default class MovieListStore {
  moviePopularList = [];
  movieUpcomingList = [];
  movieNowPlayingList = [];
  movieDetailList = [];
  movieVedioList = [];

  constructor() {
    makeObservable(this, {
      moviePopularList: observable,
      movieUpcomingList: observable,
      movieNowPlayingList: observable,
      movieDetailList: observable,
      movieVedioList: observable,
      getMoviePopularList: action,
      getMovieUpcomingList: action,
      getMovieNowPlayingList: action,
      getMovieDetailList: action,
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
    const {
      data: movieDetail,
      data: {
        videos: { results: videos },
      },
    } = await moviesApi.movieDetail(id);

    runInAction(() => {
      this.movieDetailList = movieDetail;
      this.movieVedioList = videos;
    });
  };
}
