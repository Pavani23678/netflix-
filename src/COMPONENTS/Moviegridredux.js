import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/movieActions";
import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./MovieGrid.css";

const MovieGridRedux = ({ category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use navigate hook
  const movies = useSelector((state) => state.movies[category] || []);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    dispatch(fetchMovies(category)); // Fetch movies when the component mounts or category changes
  }, [dispatch, category]);

  // Function to handle movie card click
  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`); // Navigate to the movie detail page
  };

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="movie-grid">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Movies</h2>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => handleMovieClick(movie.id)} // Use handleMovieClick
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <StarRating rating={movie.vote_average} />
          </div>
        ))
      ) : (
        <div>No movies found</div>
      )}
    </div>
  );
};

export default MovieGridRedux;