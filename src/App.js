import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./config/global";
import GlobalFonts from "./static/fonts/fonts";
import Loading from "./component/Loading";
// const MovieComp = lazy(() => import("./views/Movie/MovieContainer"));
// const TvComp = lazy(() => import("./views/TV/TvContainer"));
// const IntroComp = lazy(() => import("./views/Intro/IntroContainer"));
// const DetailsComp = lazy(() => import("./views/Detail/DetailContainer"));

const MovieComp = lazy(() => import("./views/Movie/MovieContainer"));
const TvComp = lazy(() => import("./views/TV/TvContainer"));
const IntroComp = lazy(() => import("./views/Intro/IntroContainer"));
const DetailsComp = lazy(() => import("./views/Detail/DetailContainer"));

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
            <Route exact path="/tv" component={TvComp} />
            <Route exact path="/tv/netflix-original" component={TvComp}></Route>
            <Route exact path="/tv/:id" component={DetailsComp} />
            <Route exact path="/movie/:id" component={DetailsComp} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
