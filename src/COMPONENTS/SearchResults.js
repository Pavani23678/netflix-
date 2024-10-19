import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./MovieGrid.css";

const SearchResults = () => {
  const searchResults = useSelector((state) => state.movies.searchResults);
  const navigate = useNavigate(); // Initialize navigate hook

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`); // Navigate to the movie detail page on click
  };

  return (
    <div className="movie-grid">
      <h2>Search Results</h2>
      {searchResults.length > 0 ? (
        searchResults.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => handleMovieClick(movie.id)} // Handle click to navigate
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;