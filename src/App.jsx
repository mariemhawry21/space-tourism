import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Crew from "./components/crew";
import Home from "./components/Home";
import Technology from "./components/Technology";
import Destination from "./components/Destination";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/crew" element={<Crew />} />
        <Route path="/components/Technology" element={<Technology />} />
        <Route path="/components/Destination" element={<Destination />} />
      </Routes>
    </>
  );
}

export default App;
