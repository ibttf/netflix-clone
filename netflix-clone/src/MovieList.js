import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

function MovieList({ link, handleAddMyList }) {
  const [movieList, setMovieList] = useState([]);
  const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
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
              movie={movie}
              handleAddMyList={handleAddMyList}
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
