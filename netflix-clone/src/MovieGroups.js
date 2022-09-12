import React from "react";
import ActionMovie from "./MovieLists/ActionMovie";
import AdventureMovie from "./MovieLists/AdventureMovie";
import TrendingMovies from "./MovieLists/TrendingMovies";

const MovieGroups = ({ apiKey }) => {
  return (
    <div id="MovieGroups">
      <h2 className="movie-group-classifier">Trending</h2>
      <TrendingMovies apiKey={apiKey}></TrendingMovies>
      <h3 className="movie-group-classifier">Action</h3>
      <ActionMovie apiKey={apiKey}></ActionMovie>
      <h4 className="movie-group-classifier">Adventure</h4>
      <AdventureMovie apiKey={apiKey}></AdventureMovie>
    </div>
  );
};

export default MovieGroups;
