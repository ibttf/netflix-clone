import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import "./MovieList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
function MovieList({ link, onAddDeleteClick, ids }) {
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
    <div className="movie-list-container">
      <div className="handle left-handle" onClick={handlePrevClick}>
        <FontAwesomeIcon icon={faLessThan} />
      </div>
      <div className={isNext ? `slider slider-right` : `slider`}>
        {movieList.map((movie) => {
          if (!movie.poster_path || !movie.backdrop_path) {
            return;
          }
          movie = { ...movie, watched: false };
          return (
            <MovieItem
              key={movie.id}
              movie={movie}
              inMyList={false}
              isOutsideButInMyList={ids.includes(movie.id)}
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

export default MovieList;
