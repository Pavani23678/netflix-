// redux/movieReducer.js

const initialState = {
  popular: [],
  action: [],
  adventure: [],
  comedy: [],
  drama: [], // Add drama to initial state
  searchResults: [],
};

const movieReducer = (state = initialState, action) => {
  console.log("Current state:", state);
  console.log("Action:", action);

  let newState;
  switch (action.type) {
    case "SET_MOVIES":
      // Ensure that the category exists in the initial state
      if (state[action.payload.category] !== undefined) {
        newState = {
          ...state,
          [action.payload.category]: action.payload.movies,
        };
      } else {
        console.error(`Unknown category: ${action.payload.category}`);
        newState = state;
      }
      break;

    case "SET_SEARCH_RESULTS":
      newState = {
        ...state,
        searchResults: action.payload,
      };
      break;

    default:
      newState = state;
  }

  console.log("New state:", newState);
  return newState;
};

export default movieReducer;
