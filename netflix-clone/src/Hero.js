import React, { useState, useEffect } from "react";
import "./App.css";
function Hero({ apiKey }) {
  const [movie, setMovie] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [popularity, setPopularity] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((data) => data.json())
      .then((movies) => {
        const random = parseInt(Math.random() * movies.results.length - 1);
        setMovie(movies.results[random]);
        console.log(movies.results[random], movie);
        setTitle(movie.title);
        setDescription(movie.overview);
        setPopularity(movie.popularity);

        setImage(movie.backdrop_path);
        setReleaseDate(movie.release_date);
        setId(movie.id);
        checkIsLoaded();
      });
  }, [isLoaded]);

  function checkIsLoaded() {
    console.log("this is from the function " + movie);
    if (movie.length === 0) {
      setIsLoaded(!isLoaded);
    }
  }

  return (
    <div id="Hero">
      <div className="hero-text">
        <h1 className="hero-title">{title}</h1>
        <h2 className="hero-description">{description}</h2>
        <h3 className="hero-popularity">Popularity: {popularity}</h3>
      </div>
      <img
        className="hero-image"
        src={`https://image.tmdb.org/t/p/original/${image}`}
      ></img>
    </div>
  );
}

export default Hero;
