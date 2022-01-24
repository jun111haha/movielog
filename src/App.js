import React from "react";
import { Movie, Intro } from "./views";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./config/global";
import GlobalFonts from "./static/fonts/fonts"

function App() {
  return (
    <>
    <GlobalStyle/>
    <GlobalFonts/>
      <Router>
        <Routes>
            <Route path="/" element={<Intro></Intro>} />
            <Route path="/home" element={<Movie></Movie>} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
