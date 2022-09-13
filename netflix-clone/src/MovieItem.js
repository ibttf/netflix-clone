import React, { useState } from "react";

function MovieItem({ name, image, handleAddMyList }) {
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
          src={image}
          alt="No Poster Available"
        />
      ) : (
        <h1 onClick={handleClick} style={{ color: "white" }} className="card">
          {name}
        </h1>
      )}
      <button onClick={handleAddMyList}>+</button>
    </div>
  );
}

export default MovieItem;
