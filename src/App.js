import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
     
      <Footer />
    </BrowserRouter>
  );
}

export default App;
