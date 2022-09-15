import React, { useEffect, useState } from "react";
import MovieGrid from "./MovieGrid";
import "./Search.css";

function Search({ apiKey }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieIds, setMovieIds] = useState([]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then((data) => setMovieIds(data.results));
    } else {
      setMovieIds([]);
    }
  }, [searchTerm]);

  return (
    <>
      <div className="search-bar-container">
        <input
          className="search-bar"
          placeholder={"Search for a movie or tv show"}
          onChange={handleChange}
        />
      </div>
      <MovieGrid movieIds={movieIds} />
    </>
  );
}

export default Search;
