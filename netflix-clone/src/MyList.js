import MovieItem from "./MovieItem"

function MyList ({ myList }) {
    return (
        <div className="mylist">
            <h1>{myList.length === 0 ? "Add some movies to your list!" : "Your List"}</h1>
            {myList.map(movie => <MovieItem
                key={movie.id}
                name={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />)}
        </div>
    )
}

export default MyList