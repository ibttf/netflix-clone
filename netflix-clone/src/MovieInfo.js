import { useState, useEffect } from "react";
import MovieInfoVideos from "./MovieInfoVideos";
import RecommendedMovies from "./RecommendedMovies";
import "./MovieInfo.css";

function MovieInfo({ apiKey }) {
  const url = window.location.href;

  const movieId = url.slice(22);
  console.log(movieId);
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
    )
      .then((data) => data.json())
      .then((data) => {
        setCast(data.cast);
      });
  }, []);

  if (movie.title) {
    return (
      <div id="Hero">
        <div className="hero-image-more-container">
          <img
            className="hero-image"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="No Pic"
          />
        </div>
        <div className="main-hero-content">
          <div>
            <img
              className="hero-poster"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            ></img>
          </div>
          <div className="hero-text more-info">
            <h1 className="hero-title">
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h1>
            <div className="hero-description">
              <div className="genres-container">
                {movie.genres.map((genre) => {
                  return <span className="hero-genre">{genre.name}</span>;
                })}
              </div>
            </div>
            <h3 className="hero-description">{movie.overview}</h3>
            <h2 className="hero-description cast-name-title">Cast</h2>
            <div className="cast-actors-container">
              {cast.slice(0, 5).map((castObj) => {
                return (
                  <div className="cast-actor">
                    <img
                      className="actor-img"
                      src={`https://image.tmdb.org/t/p/original/${castObj.profile_path}`}
                    />
                    <h3 className="actor-title">{castObj.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <MovieInfoVideos
          key={movieId}
          movieId={movieId}
          apiKey={apiKey}
        ></MovieInfoVideos>
        <h3 className="recommended-movies-title">More Like This: </h3>
        <RecommendedMovies
          key={movieId}
          movieId={movieId}
          apiKey={apiKey}
        ></RecommendedMovies>
      </div>
    );
  } else {
    return;
  }
}

export default MovieInfo;
