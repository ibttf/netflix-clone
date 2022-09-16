import MyMovieItem from "./MyMovieItem";
import "./MovieGrid.css";
function MovieGrid({ movieIds, isRecommended }) {
  console.log(movieIds);
  if (movieIds.length) {
    movieIds = movieIds.filter((movieId) => {
      if (movieId.backdrop_path) {
        return true;
      }
      return false;
    });
  }

  return (
    <div
      className={`movie-grid-container ${isRecommended ? "recommended" : ""}`}
    >
      {movieIds.length > 0 ? (
        movieIds.map((movieId) => (
          <MyMovieItem key={movieId.id} movieId={{ ...movieId }} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default MovieGrid;
