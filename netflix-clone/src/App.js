import React from "react";

import "./App.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import MovieGroups from "./MovieGroups";

function App() {
  const apiKey = "e738b0c021bcb38d799382dd3f2f81d6";

  return (
    <div id="App">
      <Navbar> </Navbar>
      <Hero apiKey={apiKey}> </Hero>
      <MovieGroups></MovieGroups>
    </div>
  );
}

export default App;
