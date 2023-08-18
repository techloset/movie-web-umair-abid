
import React from "react";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchBar/SearchBar";

import Home from "./pages/home/Home";
import UpComming from "./pages/upComming/UpComming";
import TopRating from "./pages/topRating/TopRating";
import Detail from "./pages/detail/Detail";

import {
  BrowserRouter, Routes, Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming" element={<UpComming />} />
        <Route path="/top-rated" element={<TopRating />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/detail/:id" element={<Detail />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;






































































