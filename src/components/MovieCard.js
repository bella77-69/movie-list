import React from "react";
import { MovieControls } from "./MovieControls";
import "./MovieCard.scss";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="card">
      <div className="card-overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <MovieControls type={type} movie={movie} />
    </div>
  );
};