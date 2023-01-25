import React from "react"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import MainMap from "./components/MainMap";
import { FaBeer } from "react-icons/fa";
import Home from "./pages/Home";



function App() {
  return (

    <div>
      Hello Maps Appjs file
      <Home />
      {/* <MainMap /> */}
      {/* Beer? <FaBeer /> */}

    </div>

  );
}

export default App;
