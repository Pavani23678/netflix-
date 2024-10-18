import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/movieActions";
import "./MovieGrid.css";

const MovieGridRedux = ({ category }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies[category] || []); // Default to empty array
  // const loading = useSelector((state) => state.movies.loading);
  // const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    dispatch(fetchMovies(category)); // Ensure you pass the category
  }, [dispatch, category]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className="movie-grid">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Movies</h2>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3 style={{ color: 'red' }}>{movie.title}</h3>
          <p style={{ color: 'red' }}>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieGridRedux;



