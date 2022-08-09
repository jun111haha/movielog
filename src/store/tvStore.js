import { action, makeObservable, observable, runInAction } from "mobx";
import { tvApi } from "../Api";

export default class tvStore {
  tvAiringTodayList = [];
  tvPopularList = [];
  tvTopRatingList = [];
  tvDetailList = [];
  tvVideoList = [];

  constructor() {
    makeObservable(this, {
      tvAiringTodayList: observable,
      tvPopularList: observable,
      tvTopRatingList: observable,
      tvDetailList: observable,
      tvVideoList: observable,

      getAiringTodayList: action,
      getPopularList: action,
      getTopRatingList: action,
      getTvDetailList: action,
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
    const {
      data: tvDetail,
      data: {
        videos: { results: videos },
      },
    } = await tvApi.tvDetail(id);

    runInAction(() => {
      this.tvDetailList = tvDetail;
      this.tvVideoList = videos;
    });
  };
}
