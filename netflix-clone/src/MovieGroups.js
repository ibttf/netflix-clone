import React from "react";
import MovieList from "./MovieList";
const MovieGroups = ({ apiKey }) => {
  return (
    <div id="MovieGroups">
      <h2 className="movie-group-classifier">Trending Movies</h2>
      <MovieList
        link={`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=3`}
      ></MovieList>
      <h3 className="movie-group-classifier">Movies Released This Year</h3>
      <MovieList
        link={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_video=true&page=1&primary_release_year=2022`}
      ></MovieList>
      <h3 className="movie-group-classifier">Adventure Movies</h3>
      <MovieList
        link={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_video=true&page=1&with_genres=12`}
      ></MovieList>
      <h3 className="movie-group-classifier">Animation Movies</h3>
      <MovieList
        link={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_video=true&page=1&with_genres=16`}
      ></MovieList>
      <h3 className="movie-group-classifier">Must Watch TV Shows</h3>
      <MovieList
        link={`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`}
      ></MovieList>
      <h3 className="movie-group-classifier">Action-Packed TV Shows</h3>
      <MovieList
        link={`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&page=1&with_genre=10759`}
      ></MovieList>
      <h3 className="movie-group-classifier">Horror Movies</h3>
    </div>
  );
};

export default MovieGroups;
