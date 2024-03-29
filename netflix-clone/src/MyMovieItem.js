import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import "./MyMovieItem.css";

function MyMovieItem({ movieId }) {
  const [movie, setMovie] = useState({});

  const apiKey = "e738b0c021bcb38d799382dd3f2f81d6";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid-item-container">
      {movie.status_code ? (
        <div></div>
      ) : (
        <div className="movie-item-container">
          <MovieItem
            movie={{ ...movieId }}
            inMyList={false}
            isOutsideButInMyList={false}
            onAddDeleteClick={() => {
              return;
            }}
          />
        </div>
      )}
    </div>
  );
}

export default MyMovieItem;
