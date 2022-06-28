import React from "react";
import { Movie, Intro, Tv } from "./views";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import GlobalStyle from "./config/global";
import GlobalFonts from "./static/fonts/fonts";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <GlobalFonts />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/home" component={Movie} />
          <Route path="/tv" component={Tv} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
