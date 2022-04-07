import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home from "./Pages/Home";
import Singlepage from "./Pages/Singlepage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="newpage" element={<Singlepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
