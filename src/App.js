import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explorer from "./Pages/Explore";
import  Post from "./Pages/Home";
import Home from "./Pages/Landing";
import Singlepage from "./Pages/Singlepage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route  path="post" element={<Post />} />
          <Route path="profile" element={<Singlepage />} />
          <Route path="explorer" element={<Explorer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
