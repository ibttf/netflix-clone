import React, {useEffect, useState} from "react";

import MovieGrid from "./MovieGrid";

function Search ({ apiKey }) {
    const [searchTerm, setSearchTerm] = useState("hell")
    const [movieIds, setMovieIds] = useState([])

    function handleChange (e) {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => setMovieIds(data.results))
    }, [searchTerm])

    return (
        <div className="searchBar">
            <input onChange={handleChange} />
            <MovieGrid movieIds={movieIds} />
        </div>
    )
}

export default Search;