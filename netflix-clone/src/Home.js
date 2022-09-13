import Hero from "./Hero";
import MovieGroups from "./MovieGroups";

function Home ({ apiKey, setMyList, handleAddMyList }) {
    return (
        <div>
            <Hero apiKey={apiKey} />
            <MovieGroups apiKey={apiKey} setMyList={setMyList} handleAddMyList={handleAddMyList} />
        </div>
    )
}

export default Home