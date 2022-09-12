import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function Hero({ apiKey }) {
  const [movie, setMovie] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [ranking, setRanking] = useState(0);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((data) => data.json())
      .then((movies) => {
        const random = parseInt(Math.random() * movies.results.length - 1);
        setRanking(random);
        setMovie(movies.results[random]);
        setTitle(movie.title);
        setDescription(movie.overview);
        setImage(movie.backdrop_path);
        checkIsLoaded();
      });
  }, [isLoaded]);

  function checkIsLoaded() {
    if (movie.length === 0) {
      setIsLoaded(!isLoaded);
    }
  }

  return (
    <div id="Hero">
      <div className="hero-text">
        <h1 className="hero-title">{title}</h1>
        <h2 className="hero-description">{description}</h2>
        <h3 className="hero-description">#{ranking} in Movies Today</h3>
        <button className="play-button">
          <FontAwesomeIcon icon={faPlay} className="icon" />
          Play
        </button>
        <button className="more-info-button">
          {" "}
          <FontAwesomeIcon icon={faCircleInfo} className="icon" />
          More Info
        </button>
      </div>
      <img
        className="hero-image"
        src={`https://image.tmdb.org/t/p/original/${image}`}
      ></img>
    </div>
  );
}

export default Hero;
