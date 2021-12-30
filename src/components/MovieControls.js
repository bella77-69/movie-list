import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./MovieControls.scss";

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="controls">
      {type === "watchlist" && (
        <>
          <button className="controls-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="controls-text">Add to Watched List</i>
          </button>

          <button
            className="controls-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="controls-text">Remove from WatchList</i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="controls-btn" onClick={() => moveToWatchlist(movie)}>
            <i className="controls-text">Remove from WatchList</i>
          </button>

          <button
            className="controls-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="controls-text">Remove from Watched</i>
          </button>
        </>
      )}
    </div>
  );
};