import { useState, useEffect } from "react"
import MovieGrid from "./MovieGrid"

function MyListPage () {
    const [myMovies, setMyMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/movies")
        .then(res => res.json())
        .then(movies => setMyMovies(movies))
    }, [])

    return (
        <div>
            <h1 className="myListText">Your List</h1>
            <MovieGrid movies={myMovies} />
        </div>
    )
}

export default MyListPage