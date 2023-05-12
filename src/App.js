import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
