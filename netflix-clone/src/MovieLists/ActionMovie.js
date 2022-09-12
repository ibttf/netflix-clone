import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";


function ActionMovie({ apiKey }) {
  //genres they have for movies:
  // adventure,animation,comedy, crime,documentary,drama,family,fantasy,history,horror,music,mystery,romance,science fiction, tv movie, thriller, war, western
  const [movieList, setMovieList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(`
https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((data) => data.json())
      .then((popularMovies) => {
        setMovieList(popularMovies.results);
      })
      .catch((error) => console.log(error));

    checkIsLoaded();
  }, [isLoaded]);

  function checkIsLoaded() {
    if (movieList.length === 0) {
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

export default ActionMovie;
