import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';

export const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header-container">
          <div className="header-link">
            <Link to="/" className="header-title">WatchList</Link>
          </div>

          <ul className="header-nav">
            <li className="header-list">
              <Link to="/" className="header-list__watch">Watch List</Link>
            </li>

            <li className="header-list">
              <Link to="/watched" className="header-list__watched">Watched</Link>
            </li>

            <li className="header-list">
              <Link to="/add" className="header-list__add btn-main">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};