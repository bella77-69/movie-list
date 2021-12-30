import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import "./WatchList.scss";

export const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie">
      <div className="movie-container">
        <div className="movie-card">
          <h1 className="movie-title">My Watchlist</h1>

          <span className="movie-count">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="movie-none">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};