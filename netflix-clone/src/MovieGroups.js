import React from "react";
import PopularMovies from "./MovieLists/PopularMovies";
import TrendingMovies from "./MovieLists/TrendingMovies";

const MovieGroups = () => {
  return (
    <div>
      <PopularMovies></PopularMovies>
      <TrendingMovies></TrendingMovies>
    </div>
  );
};

export default MovieGroups;
