import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import Technology from "./pages/Technology";
import Upload from "./pages/Upload";
import Search from "./pages/Search";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
    <div>
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Technology" element={<Technology/>}/>
      <Route path="/Upload" element={<Upload/>}/>
      <Route path="/trees" element={<Search/>}/>
      </Routes>
    </div>
    <Footer/>
  </Router>
  );
}

export default App;
