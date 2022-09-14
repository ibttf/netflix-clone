import { useParams} from "react-router-dom";
import {useState,useEffect} from "react"




function Moreinfo(){
const [posterr,setPosterr]=useState({
    title:"",
})

const{id}=useParams()

const {title,movie,image}=posterr

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e738b0c021bcb38d799382dd3f2f81d6&language=en-US&page=3${id}`)
      .then((res) => res.json())
      .then((data) => setPosterr(data));
  }, [id]);

return(
    <div style={{color:"blue"}}>
        
        <h1 color={{color:"blue"}}> title{title}</h1>
        
    </div>
)





}
export default Moreinfo