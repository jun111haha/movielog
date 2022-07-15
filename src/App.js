import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./config/global";
import GlobalFonts from "./static/fonts/fonts";
import Loading from "./component/Loading";
import NotFound from "./component/NotFound";
// const MovieComp = lazy(() => import("./views/Movie/MovieContainer"));
// const TvComp = lazy(() => import("./views/TV/TvContainer"));
// const IntroComp = lazy(() => import("./views/Intro/IntroContainer"));
// const DetailsComp = lazy(() => import("./views/Detail/DetailContainer"));

const MovieComp = lazy(() => import("./views/Movie"));
const TvComp = lazy(() => import("./views/TV"));
const IntroComp = lazy(() => import("./views/Intro"));
const DetailsComp = lazy(() => import("./views/Detail"));

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <GlobalFonts />
        <Suspense fallback={<Loading></Loading>}>
          <Switch>
            <Route exact path="/" component={IntroComp} />
            <Route exact path="/movie" component={MovieComp} />
            <Route exact path="/movie/movie-upcoming" component={MovieComp} />
            <Route exact path="/movie/movie-nowplaying" component={MovieComp} />
            <Route exact path="/tv" component={TvComp} />
            <Route exact path="/tv/popular-tv" component={TvComp} />
            <Route exact path="/tv/top-rated" component={TvComp} />
            <Route exact path="/tv/:id" component={DetailsComp} />
            <Route exact path="/movie/:id" component={DetailsComp} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
