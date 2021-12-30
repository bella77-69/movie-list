import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import "./Watched.scss";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie">
      <div className="movie-container">
        <div className="movie-header">
          <h1 className="movie-title">Watched Movies</h1>

          <span className="movie-count">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="movies-none">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};