import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import TVShows from "./pages/TVShows";
import Explore from "./pages/Explore";
import Genre from "./pages/Genre";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/TVShows" element={<TVShows />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Genre" element={<Genre />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
