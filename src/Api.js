import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "9595398e47f57dbfad3a80e5451d6ebc",
    language: "ko-KR",
  },
});

export const moviesApi = {
  nowPlaying: (page) =>
    api.get("movie/now_playing", {
      params: {
        page: page,
      },
    }),
  upcoming: (page) =>
    api.get("movie/upcoming", {
      params: {
        page: page,
      },
    }),
  popular: (page) =>
    api.get("movie/popular", {
      params: {
        page: page,
      },
    }),
  credits: (id) => api.get(`movie/${id}/credits`),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (search) =>
    api.get("search/movie", {
      params: {
        query: search,
      },
    }),
};

export const tvApi = {
  topRated: (page) =>
    api.get(`tv/top_rated`, {
      params: {
        page: page,
      },
    }),

  popular: (page) =>
    api.get(`tv/popular`, {
      params: {
        page: page,
      },
    }),
  airingToday: (page) =>
    api.get(`tv/airing_today`, {
      params: {
        page: page,
      },
    }),
  netflixOriginals: () => api.get("discover/tv"),
  credits: (id) => api.get(`tv/${id}/credits`),
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (search) =>
    api.get("search/tv", {
      params: {
        query: search,
      },
    }),
};
