import MovieItem from "./MovieItem"

function MyList ({ myList, apiKey }) {
    return (
        <div className="mylist">
            <h1>{myList.length === 0 ? "Add some movies to your list!" : "Your List"}</h1>
            {myList.map(movie => <MovieItem
                key={movie.id}
                movie={movie}
            />)}
        </div>
    )
}

export default MyList