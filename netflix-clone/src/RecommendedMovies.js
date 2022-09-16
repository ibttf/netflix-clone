import React, { useState, useEffect } from "react";
import MovieGrid from "./MovieGrid";
import "./RecommendedMovies.css";
//   movie,
//   inMyList,
//   onAddDeleteClick,
//   isOutsideButInMyList,
const RecommendedMovies = ({ movieId, apiKey }) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setRecommendedMovies(data.results));
  }, []);
  return (
    <MovieGrid
      movieIds={recommendedMovies}
      className="recommended-movie-grid"
      isRecommended={true}
    ></MovieGrid>
  );
};

export default RecommendedMovies;
