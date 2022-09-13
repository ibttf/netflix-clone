import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faPlay, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function MovieItem({ name, image ,overview}) {
  const [flip, setFlip] = useState(false);

  function handleClick() {
    setFlip(!flip);
  }
  return (
    <div  color="#0000" className="movie-poster">
      {flip === false ? (
        <img
          onClick={handleClick}
         className="movie-poster-img"
          src={image}
        ></img>
      ) : (
        
    
     <div className="posterInfo" >
       <img onClick={handleClick} className="movie-poster-img" src={image}/>
     <div className="icons">
       <FontAwesomeIcon icon={faPlay}/>
       <FontAwesomeIcon icon={faThumbsUp}/>
       <FontAwesomeIcon icon={faPlus}/>
       
 
       <div className="scrollski">{overview}</div>     

     </div>
   </div>
      )}
     
      
    </div>
    
  );
}

export default MovieItem;
