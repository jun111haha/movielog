import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./config/global";
import Loading from "./component/Loading";
import NotFound from "./component/NotFound";

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
const IntroComp = lazy(() => import("./views/Intro"));
const DetailsComp = lazy(() => import("./views/Detail"));
const SearchComap = lazy(() => import("./views/Search"));

function App() {
  return (
    <>
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
            <Route exact path="/tv/:id" component={DetailsComp} />
            <Route exact path="/movie/:id" component={MovieDetailComp} />
            <Route exact path="/search" component={SearchComap} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
