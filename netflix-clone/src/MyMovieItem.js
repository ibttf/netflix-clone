import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

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

  console.log(movie);

  return (
    <div className="movie-card">
      {movie.status_code ? (
        <div></div>
      ) : (
        <div className="myListText">
          <MovieItem
            name={movie.title ? movie.title : movie.name}
            movie={movie}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            inMyList={false}
            isOutsideButInMyList={false}
            onAddDeleteClick={() => {
              return;
            }}
          />
        </div>
      )}
      <p>{movie.overview}</p>
    </div>
  );
}

export default MyMovieItem;
