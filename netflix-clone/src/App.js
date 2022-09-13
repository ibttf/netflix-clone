import React from "react";

import "./App.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import MovieGroups from "./MovieGroups";
import Footer from "./Footer";

function App() {
  const apiKey = "e738b0c021bcb38d799382dd3f2f81d6";

//   const diplay=pokemon.filter((poke)=>
// poke.name.includes(search)
//   )
  return (
    <div id="App">
      <Navbar> </Navbar>
      <Hero apiKey={apiKey}> </Hero>
      <MovieGroups apiKey={apiKey}  ></MovieGroups>
      <Footer></Footer>
    </div>
  );
}

export default App;
