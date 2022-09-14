import React from "react";

import Hero from "./Hero";
import MovieGroups from "./MovieGroups";

function Home () {
    const apiKey = "e738b0c021bcb38d799382dd3f2f81d6";

    return (
        <div>
            <Hero apiKey={apiKey}> </Hero>
            <MovieGroups apiKey={apiKey}></MovieGroups>
            
        </div>
    )
}

export default Home;