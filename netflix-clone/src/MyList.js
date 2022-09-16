import React, { useState } from "react";
import MovieItem from "./MovieItem";
import "./MovieList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
function MyList({ onAddDeleteClick, movies }) {
  const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(false);

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
    <div className="movie-list-container">
      <div className="handle left-handle" onClick={handlePrevClick}>
        <FontAwesomeIcon icon={faLessThan} />
      </div>
      <div className={isNext ? `slider slider-right` : `slider`}>
        {movies.map((movie) => {
          if (!movie.poster_path || !movie.backdrop_path) {
            return;
          }
          return (
            <MovieItem
              key={movie.id}
              name={movie.title}
              movie={movie}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              inMyList={true}
              isOutsideButInMyList={false}
              onAddDeleteClick={onAddDeleteClick}
              className="MovieItem"
            ></MovieItem>
          );
        })}
      </div>
      <div className="handle right-handle" onClick={handleNextClick}>
        <FontAwesomeIcon icon={faGreaterThan} />
      </div>
    </div>
  );
}

export default MyList;
