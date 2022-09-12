import React from "react";

function MovieItem({ name, image }) {
  return (
    <div className="movie-poster">
      <img className="movie-poster-img" src={image}></img>
    </div>
  );
}

export default MovieItem;
