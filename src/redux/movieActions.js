import axios from "axios";

const API_KEY = "2322c5053c8f34baff2a2d2aa512f228"; // Replace with your actual TMDB API key
const API_BASE_URL = "https://api.themoviedb.org/3";

// redux/movieActions.js

export const fetchMovies = (category) => async (dispatch) => {
  dispatch({ type: "SET_LOADING" }); // Start loading before fetching data
  try {
    let endpoint;
    switch (category) {
      case "action":
        endpoint = "/discover/movie?with_genres=28";
        break;
      case "adventure":
        endpoint = "/discover/movie?with_genres=12";
        break;
      case "comedy":
        endpoint = "/discover/movie?with_genres=35";
        break;
      case "drama":
        endpoint = "/discover/movie?with_genres=18"; // Genre ID for Drama
        break;
      case "horror":
        endpoint = "/discover/movie?with_genres=27"; // Genre ID for Horror
        break;
      case "fantasy":
        endpoint = "/discover/movie?with_genres=14"; // Genre ID for Fantasy
        break;
      case "romance":
        endpoint = "/discover/movie?with_genres=10749"; // Genre ID for Romance
        break;
      case "thriller":
        endpoint = "/discover/movie?with_genres=53"; // Genre ID for Thriller
        break;
      case "science-fiction":
        endpoint = "/discover/movie?with_genres=878"; // Genre ID for Science Fiction
        break;
      case "animation":
        endpoint = "/discover/movie?with_genres=16"; // Genre ID for Animation
        break;
      case "documentary":
        endpoint = "/discover/movie?with_genres=99"; // Genre ID for Documentary
        break;
      case "popular":
      default:
        endpoint = "/movie/popular";
    }

    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    console.log("API response:", response.data.results);
    dispatch({
      type: "SET_MOVIES",
      payload: { category, movies: response.data.results },
    });
  } catch (error) {
    console.error(`Error fetching ${category} movies:`, error);
    dispatch({ type: "SET_ERROR", payload: error.message }); // Set error state
  }
};

export const searchMovies = (query) => async (dispatch) => {
  dispatch({ type: "SET_LOADING" }); // Start loading before fetching data
  try {
    const response = await axios.get(`${API_BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        query: query,
        page: 1,
      },
    });
    dispatch({ type: "SET_SEARCH_RESULTS", payload: response.data.results });
  } catch (error) {
    console.error(`Error searching movies:`, error);
    dispatch({ type: "SET_ERROR", payload: error.message }); // Set error state
  }
};

export const fetchMovieDetail = (id) => async (dispatch) => {
  dispatch({ type: "SET_LOADING" }); // Start loading before fetching data
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    const trailerResponse = await axios.get(`${API_BASE_URL}/movie/${id}/videos`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });

    const trailer = trailerResponse.data.results[0]?.key; // Get the first trailer key
    dispatch({
      type: "SET_MOVIE_DETAIL",
      payload: { movieDetail: { ...response.data, trailer } },
    });
  } catch (error) {
    console.error(`Error fetching movie details:`, error);
    dispatch({ type: "SET_ERROR", payload: error.message }); // Set error state
  }
};
export const fetchWatchProviders = (movieId) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers`, {
      params: {
        api_key: API_KEY,
      },
    });
    dispatch({
      type: "SET_WATCH_PROVIDERS",
      payload: response.data.results,
    });
  } catch (error) {
    console.error("Error fetching watch providers:", error);
  }
};