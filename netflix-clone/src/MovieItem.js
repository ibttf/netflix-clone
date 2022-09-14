import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPlus,
  faAngleDown,
  faX,
} from "@fortawesome/free-solid-svg-icons";
function MovieItem({
  name,
  movie,
  image,
  inMyList,
  onAddDeleteClick,
  isOutsideButInMyList,
}) {
  const [isHovering, setIsHovering] = useState(false);

  function handleHover() {
    setIsHovering(!isHovering);
  }

  function handleMyListClick() {
    fetch("http://localhost:8000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((data) => data.json())
      .then((movie) => console.log(movie));
  }

  const addDeleteIcon = renderAddDeleteButton();
  function renderAddDeleteButton() {
    if (inMyList) {
      //if it is already in the list

      return faX;
    } else {
      //if it is not already in the list
      if (isOutsideButInMyList) {
        //it's outside the list, but an element that you'd added to the list
        return faX;
      } else {
        //it's outside the list and you hadn't added it to the list yet
        return faPlus;
      }
    }
  }
  return (
    <div className="movie-poster">
      {isHovering ? (
        <div className="hovering-card" onMouseLeave={handleHover}>
          <img src={image} className="movie-poster-img"></img>
          <p className="hovering-card-text">{name}</p>
          <button className="hovering-card-button play-button-hover">
            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
          </button>
          <button
            className="hovering-card-button add-to-list-button-hover"
            onClick={() => {
              handleMyListClick();
              onAddDeleteClick();
            }}
          >
            <FontAwesomeIcon icon={addDeleteIcon}></FontAwesomeIcon>
          </button>
          <button className="hovering-card-button angle-down-button-hover">
            <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
          </button>
        </div>
      ) : (
        <img
          className={`movie-poster-img`}
          src={image}
          onMouseEnter={handleHover}
        ></img>
      )}
    </div>
  );
}

export default MovieItem;
