import React, { useState } from "react";

function MovieItem({ name, image }) {
  const [isHovering, setIsHovering] = useState(true);
  function handleHover() {
    setIsHovering(!isHovering);
  }
  return (
    <div className="movie-poster">
      {isHovering ? (
        <img
          className={`movie-poster-img`}
          src={image}
          onMouseOver={handleHover}
        ></img>
      ) : (
        <div className="hovering-card" onMouseOut={handleHover}>
          <img src={image} className="movie-poster-img-hovering"></img>
          <p className="hovering-card-text">{name}</p>
        </div>
      )}
    </div>
  );
}

export default MovieItem;
