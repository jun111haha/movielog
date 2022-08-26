import { action, makeObservable, observable, runInAction } from "mobx";
import { tvApi } from "../Api";

export default class tvStore {
  tvAiringTodayList = [];
  tvAiringTodayPage = 1;
  tvPopularList = [];
  tvPopularPage = 1;
  tvTopRatingList = [];
  tvTopRatingPage = 1;
  tvDetailList = [];
  tvVideoList = [];
  tvSearchList = [];
  tvEmptyCheck = false;

  constructor() {
    makeObservable(this, {
      tvAiringTodayList: observable,
      tvPopularList: observable,
      tvTopRatingList: observable,
      tvDetailList: observable,
      tvVideoList: observable,
      tvSearchList: observable,
      tvEmptyCheck: observable,
      tvAiringTodayPage: observable,
      tvPopularPage: observable,
      tvTopRatingPage: observable,

      tvDetailReset: action,
      getAiringTodayList: action,
      getPopularList: action,
      getTopRatingList: action,
      getTvDetailList: action,
      getTvSearhList: action,
    });
  }
  getAiringTodayList = async (page) => {
    const {
      data: { results: airingTodayResult },
    } = await tvApi.airingToday(page);

    runInAction(() => {
      this.tvAiringTodayList = [
        ...this.tvAiringTodayList,
        ...airingTodayResult,
      ];
    });
  };
  getPopularList = async (page) => {
    const {
      data: { results: topPopularRequest },
    } = await tvApi.popular(page);

    runInAction(() => {
      this.tvPopularList = [...this.tvPopularList, ...topPopularRequest];
    });
  };

  getTopRatingList = async (page) => {
    const {
      data: { results: topRatedRequest },
    } = await tvApi.topRated(page);

    runInAction(() => {
      this.tvTopRatingList = [...this.tvTopRatingList, ...topRatedRequest];
    });
  };

  getTvDetailList = async (id) => {
    const { data: tvDetail } = await tvApi.tvDetail(id);

    runInAction(() => {
      this.tvDetailList = tvDetail;
    });
  };

  getTvSearhList = async (value) => {
    const {
      data: { results: tvSearchResult },
    } = await tvApi.search(value);

    runInAction(() => {
      this.tvSearchList = tvSearchResult;
      this.tvEmptyCheck = tvSearchResult.length > 0 ? false : true;
    });
  };

  tvDetailReset = () => {
    this.tvDetailList = [];
  };
}
