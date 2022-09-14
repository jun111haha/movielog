import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./config/global";
import Loading from "./component/Loading";
import NotFound from "./component/NotFound";
import { ThemeProvider } from "styled-components";
import theme from "./config/Theme";
import KaKaoLogin from "./component/KaKaoLogin";

const MoviePopularComp = lazy(() =>
  import("./views/Movie/container/MoviePopularContainer")
);

const MovieUpcomingComp = lazy(() =>
  import("./views/Movie/container/MovieUpcomingContainer")
);

const MovieNowplayingComp = lazy(() =>
  import("./views/Movie/container/MovieNowPlayingContainer")
);

const TvAiringTodayComp = lazy(() =>
  import("./views/TV/container/TvAiringTodayContainer")
);

const TvPopularComp = lazy(() =>
  import("./views/TV/container/TvPopularContainer")
);

const TvTopRatedComp = lazy(() =>
  import("./views/TV/container/TvTopRatedContainer")
);

const MovieDetailComp = lazy(() =>
  import("./views/Detail/container/MovieDetailContainer")
);

const TvDetailComp = lazy(() =>
  import("./views/Detail/container/TvDetailContainer")
);
const IntroComp = lazy(() => import("./views/Intro"));
const SearchComap = lazy(() => import("./views/Search"));
const MyLog = lazy(() => import("./views/MyLog/container/MyLogContainer"));

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Suspense fallback={<Loading></Loading>}>
            <Switch>
              <Route exact path="/" component={IntroComp} />
              <Route exact path="/movie" component={MoviePopularComp} />
              <Route
                exact
                path="/movie/movie-upcoming"
                component={MovieUpcomingComp}
              />
              <Route
                exact
                path="/movie/movie-nowplaying"
                component={MovieNowplayingComp}
              />
              <Route exact path="/tv" component={TvAiringTodayComp} />
              <Route exact path="/tv/popular-tv" component={TvPopularComp} />
              <Route exact path="/tv/top-rated" component={TvTopRatedComp} />
              <Route exact path="/tv/:id" component={TvDetailComp} />
              <Route exact path="/movie/:id" component={MovieDetailComp} />
              <Route exact path="/search" component={SearchComap} />
              <Route exact path="/kakaoLogin" component={KaKaoLogin} />
              <Route exact path="/mylog" component={MyLog}></Route>
              <Route exact path="*" component={NotFound} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
