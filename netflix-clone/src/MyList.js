import React from "react";
import MovieItem from "./MovieItem";
import "./MovieList.css";

function MyList({ onAddDeleteClick, movies }) {
  function handleSlideClick(e) {
    if (
      e.target.className.includes("left") &&
      parseInt(
        getComputedStyle(e.target.nextSibling).getPropertyValue(
          "--slider-index"
        )
      )
    ) {
      const slider = e.target.nextSibling;
      const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
      );
      slider.style.setProperty("--slider-index", sliderIndex - 1);
    } else if (e.target.className.includes("right")) {
      const slider = e.target.previousSibling;
      const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
      );
      slider.style.setProperty("--slider-index", sliderIndex + 1);
    }
  }
  return (
    <div className="movie-list-container">
      <div className="handle left-handle" onClick={handleSlideClick}>
        &#8249;
      </div>
      <div className={`slider`}>
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
      <div className="handle right-handle" onClick={handleSlideClick}>
        &#8250;
      </div>
    </div>
  );
}

export default MyList;
