import React, { useState } from "react";
import { ResultCard } from "./ResultCard";
import { api_key } from "../apis/config";
import "./Add.scss"

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add">
      <div className="add-container">
        <div className="add-content">
          <div className="add-input--wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="add-results">
              {results.map((movie) => (
                <li key={movie.id} className="add-list">
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};