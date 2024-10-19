import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { fetchMovieDetail, fetchWatchProviders } from '../redux/movieActions'; // Import fetchWatchProviders action

const MovieDetail = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movies.movieDetail);
  const watchProviders = useSelector((state) => state.movies.watchProviders); // Get watch providers from Redux store
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    dispatch(fetchMovieDetail(id)); // Fetch movie details based on the ID
    dispatch(fetchWatchProviders(id)); // Fetch watch providers for the movie
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!movieDetail) {
    return <div>No movie details available.</div>; // Handle the case where movieDetail is not available
  }


  return (
    <div className="movie-details">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              alt={movieDetail.title}
              height="600"
              image={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {movieDetail.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {movieDetail.overview}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Release Date: {movieDetail.release_date}
            </Typography>

            {/* Add a section for the trailer */}
            {movieDetail.trailer && (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${movieDetail.trailer}`}
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}

            {/* Display Watch Providers */}
            <h3>Watch on:</h3>
            {watchProviders && watchProviders.IN && watchProviders.IN.flatrate ? (
              <div>
                {watchProviders.IN.flatrate.map((provider) => (
                  <div key={provider.provider_id}>
                    <p>{provider.provider_name}</p>
                    <img src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`} alt={provider.provider_name} />
                  </div>
                ))}
              </div>
            ) : (
              <p>No streaming providers available</p>
            )}
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetail;
