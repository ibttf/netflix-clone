import React, { useState, useEffect } from "react";
import "./MovieInfoVideos.css";
const MovieInfoVideos = ({ movieId, apiKey }) => {
  const [videoIds, setVideoIds] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          console.log(data.results);
          setVideoIds(data.results);
        }
      });
  }, []);

  function renderVideoUrl(videoObj) {
    if (videoObj.site === "YouTube") {
      return `https://www.youtube.com/embed/${videoObj.key}`;
    } else if (videoObj.site === "Vimeo") {
      return `https://www.vimeo.com/${videoObj.key}`;
    }
  }

  return (
    <div className="movie-videos-container">
      {videoIds ? (
        videoIds.slice(0, 5).map((videoObj) => {
          return (
            <div className="movie-video">
              <h2 className="movie-video-title">{videoObj.name}</h2>
              <iframe
                className="movie-info-trailer"
                src={renderVideoUrl(videoObj)}
                controls="controls"
              ></iframe>
            </div>
          );
        })
      ) : (
        <h2>GOODBYE</h2>
      )}
    </div>
  );
};

export default MovieInfoVideos;
