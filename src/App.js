import React from "react";
import Quiz from "../src/Screen/quiz.jsx";
import './App.css'
import Home from "./Screen/home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}
export default App;
