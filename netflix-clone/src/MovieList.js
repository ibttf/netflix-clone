import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

function MovieList({ link, onAddDeleteClick, myList, ids }) {
  const [movieList, setMovieList] = useState([]);
  const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(false);

  useEffect(() => {
    fetch(link)
      .then((data) => data.json())
      .then((popularMovies) => {
        setMovieList(popularMovies.results);
      });
  }, []);

  function handlePrevClick() {
    if (isNext) {
      setIsNext(false);
      setIsPrev(true);
    }
  }

  function handleNextClick() {
    if (isPrev) {
      setIsPrev(false);
    }
    setIsNext(true);
  }

  return (
    <div className="container">
      <div className="handle left-handle" onClick={handlePrevClick}>
        <span>&lt;</span>
      </div>
      <div className={isNext ? `slider slider-right` : `slider`}>
        {movieList.map((movie) => {
          if (!movie.poster_path) {
            return;
          }
          return (
            <MovieItem
              key={movie.id}
              name={movie.title}
              movie={movie}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              inMyList={false}
              isOutsideButInMyList={ids.includes(movie.id)}
              onAddDeleteClick={onAddDeleteClick}
            ></MovieItem>
          );
        })}
      </div>
      <div className="handle right-handle" onClick={handleNextClick}>
        <span>&gt;</span>
      </div>
    </div>
  );
}

export default MovieList;
