import MyMovieItem from "./MyMovieItem";

function MovieGrid ({ movieIds }) {
    return(
        <div>
            {(movieIds) ? movieIds.map(movieId => <MyMovieItem key={movieId.id} movieId={movieId} />) : "Cannot Return Movies"}
        </div>
    )
}

export default MovieGrid;