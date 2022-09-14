function MyMovieItem ({ movie }) {
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Logo" className="card-movie-poster"/>
            <div className="myListText">
                <h4><b>{movie.title}</b></h4>
            </div>
        </div>
    )
}

export default MyMovieItem;