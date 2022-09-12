import React from "react";
import TrendingMovies from "./MovieLists/TrendingMovies";

const MovieGroups = ({ apiKey }) => {
  return (
    <div>
      <TrendingMovies apiKey={apiKey}></TrendingMovies>
    </div>
  );
};

export default MovieGroups;
