import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

function MovieList({ link }) {
  //genres they have for movies:
  // adventure,animation,comedy, crime,documentary,drama,family,fantasy,history,horror,music,mystery,romance,science fiction, tv movie, thriller, war, western
  //action tv shows : https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&page=1&with_genre=10759
  //adventure movies: https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_video=true&page=1&with_genres=12&primary_release_year=2021
  //animation movies: https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_video=true&page=1&with_genres=16&primary_release_year=2021
  //horror movies: https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=true&page=1&with_genres=27
  //popular tv shows: https://api.themoviedb.org/3/discover/tv?api_key=e738b0c021bcb38d799382dd3f2f81d6&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0
  //this year movies: https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_video=true&page=1&primary_release_year=2022
  //trending movies: https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=3

  const [movieList, setMovieList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(link)
      .then((data) => data.json())
      .then((popularMovies) => {
        setMovieList(popularMovies.results);
      })
      .catch((error) => console.log(error));
  }, [isLoaded]);

  function checkIsLoaded() {
    if (movieList.length === 0) {
      console.log("something is wrong");
      setIsLoaded(!isLoaded);
    }
  }

  return (
    <div className="trending-container">
      {movieList.map((movie) => {
        return (
          <MovieItem
            key={movie.id}
            name={movie.title}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          ></MovieItem>
        );
      })}
    </div>
  );
}

export default MovieList;
