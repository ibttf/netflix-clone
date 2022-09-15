import { useState, useEffect } from "react";

function MovieInfo ({ apiKey }) {
    const url = window.location.href;
    const movieId = url.slice(22);

    const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }, [])

    if (!movie.title) {
        return
    } else {
        return (
            <div id="Hero">
                <div className="hero-text">
                    <h1 className="hero-title">{movie.title} ({movie.release_date.slice(0,4)})</h1>
                    <h2 className="hero-description">{movie.vote_average} / 10 || <span>{movie.runtime} minutes</span></h2>
                    <h3 className="hero-description">{movie.overview}</h3>
                </div>
                <img className="hero-image" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="No Pic"/>
            </div>
        )
    }
}

export default MovieInfo;