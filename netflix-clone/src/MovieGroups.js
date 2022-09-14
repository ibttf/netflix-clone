import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import MyList from "./MyList";
const MovieGroups = ({ apiKey }) => {
  const trendingMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=3`;
  const recentMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_video=true&page=1&primary_release_year=2022`;
  const adventureMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_video=true&page=1&with_genres=12`;
  const animationMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_video=true&page=1&with_genres=16`;
  const popularTVShows = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
  const dramaTVShows = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=2&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&with_genre=18`;
  const horrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=true&page=1&with_genres=27`;
  const [toggle, setToggle] = useState(false);
  const [myList, setMyList] = useState([]);

  let idArray = [];
  for (const movie of myList) {
    idArray.push(movie.id);
  }
  function flipToggle() {
    console.log(toggle);
    setToggle(!toggle);
  }

  useEffect(() => {
    fetch(" http://localhost:8000/movies")
      .then((data) => data.json())
      .then((movies) => setMyList(movies));
  }, [toggle]);

  return (
    <div id="MovieGroups">
      <h3 className="movie-group-classifier">Trending Movies</h3>
      <MovieList
        onAddDeleteClick={flipToggle}
        link={trendingMovies}
        myList={myList}
        ids={idArray}
      ></MovieList>
      <h3 className="movie-group-classifier">My List</h3>
      {/* THE MOVIE LIST ISN'T AN ORDINARY ITEM; THIS IS PROBABLY GOING TO BE A JSON SERVER THAT WE CREATE OURSELVES */}
      <MyList
        onAddDeleteClick={flipToggle}
        movies={myList}
        ids={idArray}
      ></MyList>
      <h3 className="movie-group-classifier">Movies Released This Year</h3>
      <MovieList
        onAddDeleteClick={flipToggle}
        link={recentMovies}
        myList={myList}
        ids={idArray}
      ></MovieList>
      <h3 className="movie-group-classifier">Adventure Movies</h3>
      <MovieList
        onAddDeleteClick={flipToggle}
        link={adventureMovies}
        myList={myList}
        ids={idArray}
      ></MovieList>
      <h3 className="movie-group-classifier">Animation Movies</h3>
      <MovieList
        onAddDeleteClick={flipToggle}
        link={animationMovies}
        myList={myList}
        ids={idArray}
      ></MovieList>
      <h3 className="movie-group-classifier">Must Watch TV Shows</h3>
      <MovieList
        onAddDeleteClick={flipToggle}
        link={popularTVShows}
        myList={myList}
        ids={idArray}
      ></MovieList>
      <h3 className="movie-group-classifier">Dramatic TV Shows</h3>
      <MovieList
        onAddDeleteClick={flipToggle}
        link={dramaTVShows}
        myList={myList}
        ids={idArray}
      ></MovieList>
      <h3 className="movie-group-classifier">Horror Movies</h3>
      <MovieList
        onAddDeleteClick={flipToggle}
        link={horrorMovies}
        myList={myList}
        ids={idArray}
      ></MovieList>
    </div>
  );
};

export default MovieGroups;
