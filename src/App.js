import React from "react";
import { Home,Intro } from "./views";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./config/global";
function App() {
  return (
    <>
    <GlobalStyle/>
      <Router>
        <Routes>
            <Route path="/" element={<Intro></Intro>} />
            <Route path="/home" element={<Home></Home>} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
