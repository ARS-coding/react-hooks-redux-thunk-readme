// Action Creators
export function fetchAstronauts() {
  return (dispatch) => {
    dispatch({ type: "astronauts/astronautsLoading" });
    fetch("http://api.open-notify.org/astros.json")
      .then(response => response.json())
      .then(json => dispatch({
        type: "astronauts/astronautsLoaded",
        payload: json.people // array of objects
      }));
  }
}

// Reducers
const initialState = {
  entities: [], //array of astronauts
  isLoading: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "astronauts/astronautsLoading":
      return { ...state, isLoading: true };

    case "astronauts/astronautsLoaded":
      return { ...state, entities: action.payload , isLoading: false };

    default:
      return state;
  }
}
