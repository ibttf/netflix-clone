import React, { useState } from "react";

function MovieItem({ movie, handleAddMyList }) {
  const [flip, setFlip] = useState(false);

  function handleClick() {
    setFlip(!flip);
  }
  return (
    <div color="#0000" className="movie-poster">
      {flip === false ? (
        <img
          onClick={handleClick}
          className="movie-poster-img"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="No Poster Available"
        />
      ) : (
        <h1 onClick={handleClick} style={{ color: "white" }} className="card">
          {movie.title}
        </h1>
      )}
      <button onClick={handleAddMyList(movie)}>+</button>
    </div>
  );
}

export default MovieItem;
