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
  const movieCODES = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const tvCODES = {
    10759: "Action and Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    10762: "Kids",
    9648: "Mystery",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi and Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War and Politics",
    37: "Western",
  };
  function handleHover() {
    setIsHovering(!isHovering);
  }

  function handleMyListClick(e) {
    console.log(movie);
    if (e.currentTarget.className.includes("add")) {
      fetch("http://localhost:8000/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      }).then((data) => data.json());
    } else {
      fetch(`http://localhost:8000/movies/${movie.id}`, {
        method: "DELETE",
      }).then((data) => data.json());
    }
  }

  const addDeleteIcon = renderAddDeleteButton();

  function renderAddDeleteButton() {
    if (inMyList) {
      //if it is already in the list

      return [faX, "delete-button"];
    } else {
      //if it is not already in the list
      if (isOutsideButInMyList) {
        //it's outside the list, but an element that you'd added to the list

        return [faX, "delete-button"];
      } else {
        //it's outside the list and you hadn't added it to the list yet

        return [faPlus, "add-button"];
      }
    }
  }

  return (
    <div className="movie-poster">
      {isHovering ? (
        <div className="hovering-card" onMouseLeave={handleHover}>
          <img src={image} className="movie-poster-img"></img>
          <p className="hovering-card-text">{name}</p>
          <div className="genres-container">
            {movie.genre_ids ? movie.genre_ids.slice(0, 3).map((id) => {
              return <p className="genre">{movieCODES[id]}</p>;
            }) : movie.genres.slice(0,3).map((obj) => {
              return <p className="genre">{obj.name}</p>})}
          </div>

          <button className="hovering-card-button play-button-hover">
            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
          </button>
          <button
            className={`hovering-card-button ${addDeleteIcon[1]}`}
            onClick={(e) => {
              handleMyListClick(e);
              onAddDeleteClick();
            }}
          >
            <FontAwesomeIcon
              icon={addDeleteIcon[0]}
              className="adddelete-icon"
            ></FontAwesomeIcon>
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
