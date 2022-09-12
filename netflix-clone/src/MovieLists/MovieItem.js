import React from "react";

function MovieItem({ name, image }) {
  return <img className="movie-poster-img" src={image}></img>;
}

export default MovieItem;
