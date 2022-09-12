import React from "react";
import TrendingMovies from "./MovieLists/TrendingMovies";

const MovieGroups = ({ apiKey }) => {
  return (
    <div id="MovieGroups">
      <h2 className="movie-group-classifier">Trending Movies</h2>
      <TrendingMovies apiKey={apiKey}></TrendingMovies>
    </div>
  );
};

export default MovieGroups;
