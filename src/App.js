import React from "react";
import { Movie, Intro, Tv, Detail } from "./views";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
          <Route path="/movie" component={Movie} />
          <Route path="/tv" component={Tv} />
          <Route exact path="/movie/:id" component={Detail} />
          <Route exact path="/tv/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
