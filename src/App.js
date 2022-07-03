import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./config/global";
import GlobalFonts from "./static/fonts/fonts";

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
        <Suspense fallback={<div>로딩 중. . .</div>}>
          <Switch>
            <Route exact path="/movie/:id" component={DetailsComp} />
            <Route exact path="/tv/:id" component={DetailsComp} />
            <Route exact path="/" component={IntroComp} />
            <Route path="/tv" component={TvComp} />
            <Route path="/movie" component={MovieComp} />
          </Switch>
          /
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
