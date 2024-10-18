import axios from "axios";

const API_KEY = "8938a3687965cbeaaf8555b40cad3acb"; // Replace with your actual TMDB API key
const API_BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = (category) => async (dispatch) => {
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
      case "drama": // New case for Drama
        endpoint = "/discover/movie?with_genres=18";
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
    dispatch({
      type: "SET_MOVIES",
      payload: { category, movies: response.data.results },
    });
  } catch (error) {
    console.error(`Error fetching ${category} movies:`, error);
  }
};

export const searchMovies = (query) => async (dispatch) => {
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
  }
};
