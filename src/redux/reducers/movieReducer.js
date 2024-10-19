const initialState = {
  popular: [],
  action: [],
  adventure: [],
  comedy: [],
  drama: [],
  horror: [],
  fantasy: [],
  romance: [],
  thriller: [],
  scienceFiction: [],
  animation: [],
  documentary: [],
  searchResults: [],
  movieDetail: null, // Add movieDetail state
  loading: false, // Add loading state
  error: null, // Add error state
};

const movieReducer = (state = initialState, action) => {
  console.log("Current state:", state);
  console.log("Action:", action);

  let newState;
  switch (action.type) {
    case "SET_LOADING":
      newState = {
        ...state,
        loading: true,
        error: null, // Reset error on loading
      };
      break;

    case "SET_MOVIES":
      if (state[action.payload.category] !== undefined) {
        newState = {
          ...state,
          [action.payload.category]: action.payload.movies,
          loading: false, // Stop loading when movies are fetched
        };
      } else {
        console.error(`Unknown category: ${action.payload.category}`);
        newState = state;
      }
      break;

    case "SET_MOVIE_DETAIL":
      newState = {
        ...state,
        movieDetail: action.payload.movieDetail,
        loading: false, // Stop loading when movie details are fetched
      };
      break;

    case "SET_SEARCH_RESULTS":
      newState = {
        ...state,
        searchResults: action.payload,
        loading: false, // Stop loading when search results are fetched
      };
      break;

    case "SET_ERROR":
      newState = {
        ...state,
        loading: false, // Stop loading on error
        error: action.payload,
      };
      break;
      case "SET_WATCH_PROVIDERS":
      newState = {
    ...state,
    watchProviders: action.payload,
  };
  break;


    default:
      newState = state;
  }

  console.log("New state:", newState);
  return newState;
};


export default movieReducer;