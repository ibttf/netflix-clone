import React from "react";
import MovieList from "./MovieList";
const MovieGroups = ({ apiKey, handleAddMyList }) => {
  const trendingMovies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
  const recentMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_video=true&page=1&primary_release_year=2022`;
  const adventureMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_video=true&page=1&with_genres=12`;
  const animationMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_video=true&page=1&with_genres=16`;
  const popularTVShows = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
  const dramaTVShows = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=2&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&with_genre=18`;
  const horrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=27`;

  return (
    <div id="MovieGroups">
      <h3 className="movie-group-classifier">Trending Movies</h3>
      <MovieList link={trendingMovies} handleAddMyList={handleAddMyList}></MovieList>

      
      <h3 className="movie-group-classifier">Movies Released This Year</h3>
      <MovieList link={recentMovies} handleAddMyList={handleAddMyList}></MovieList>

      <h3 className="movie-group-classifier">Adventure Movies</h3>
      <MovieList link={adventureMovies} handleAddMyList={handleAddMyList}></MovieList>

      <h3 className="movie-group-classifier">Animation Movies</h3>
      <MovieList link={animationMovies} handleAddMyList={handleAddMyList}></MovieList>

      <h3 className="movie-group-classifier">Must Watch TV Shows</h3>
      <MovieList link={popularTVShows} handleAddMyList={handleAddMyList}></MovieList>

      <h3 className="movie-group-classifier">Dramatic TV Shows</h3>
      <MovieList link={dramaTVShows} handleAddMyList={handleAddMyList}></MovieList>

      <h3 className="movie-group-classifier">Horror Movies</h3>
      <MovieList link={horrorMovies} handleAddMyList={handleAddMyList}></MovieList>

    </div>
  );
};

export default MovieGroups;
