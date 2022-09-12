import React, { useState } from "react";

function MovieItem({ name, image }) {
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
        ></img>
      ) : (
        <strong
          onClick={handleClick}
          style={{ color: "white" }}
          className="card"
        >
          {name}
        </strong>
      )}
    </div>
  );
}

export default MovieItem;
