import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "",
    language: "ko-KR",
  },
});

export const moviesApi = {
  nowPlaying: (page) =>
    Api.get("movie/now_playing", {
      params: {
        page: page,
      },
    }),
  upcoming: (page) =>
    Api.get("movie/upcoming", {
      params: {
        page: page,
      },
    }),
  popular: (page) =>
    Api.get("movie/popular", {
      params: {
        page: page,
      },
    }),
  credits: (id) => Api.get(`movie/${id}/credits`),
  movieDetail: (id) =>
    Api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (search) =>
    Api.get("search/movie", {
      params: {
        query: search,
      },
    }),
};

export const tvApi = {
  topRated: (page) =>
    Api.get(`tv/top_rated`, {
      params: {
        page: page,
      },
    }),

  popular: (page) =>
    Api.get(`tv/popular`, {
      params: {
        page: page,
      },
    }),
  airingToday: (page) =>
    Api.get(`tv/airing_today`, {
      params: {
        page: page,
      },
    }),
  netflixOriginals: () => Api.get("discover/tv"),
  credits: (id) => Api.get(`tv/${id}/credits`),
  tvDetail: (id) =>
    Api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (search) =>
    Api.get("search/tv", {
      params: {
        query: search,
      },
    }),
};
