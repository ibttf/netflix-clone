import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faCheck } from "@fortawesome/free-solid-svg-icons";

function MovieItem({ movie, handleAddMyList }) {
  const [flip, setFlip] = useState(false);
  const [added, setAdded] = useState(false);

  function onAddMovie() {
    handleAddMyList(movie)
    setAdded(true)
  }

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
      <p className="movie-poster-info" >{<FontAwesomeIcon className="movie-poster-info" icon={faCircleInfo} />} More Info | </p>
      <button className="movie-poster-info-dark" onClick={onAddMovie}>{added ? <FontAwesomeIcon className="movie-poster-info-dark" icon={faCheck} /> : "+"}</button>
    </div>
  );
}

export default MovieItem;
