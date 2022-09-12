import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

function MovieList({ link }) {
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
