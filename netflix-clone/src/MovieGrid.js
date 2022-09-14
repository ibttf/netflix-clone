import MyMovieItem from "./MyMovieItem";

function MovieGrid ({ movies }) {
    return(
        <div>
            {movies.map(movie => <MyMovieItem key={movie.id} movie={movie} />)}
        </div>
    )
}

export default MovieGrid;