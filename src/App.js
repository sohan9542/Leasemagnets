import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explorer from "./Pages/Explore";
import  Home from "./Pages/Home";
import Singlepage from "./Pages/Singlepage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="profile" element={<Singlepage />} />
          <Route path="explorer" element={<Explorer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
