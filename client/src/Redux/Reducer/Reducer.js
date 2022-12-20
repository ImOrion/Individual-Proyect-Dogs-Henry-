const initialState = {
  dogs: [],
  allDogs: [],
  temperaments: []
};

console.log(initialState.allDogs)
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        allDogs: action.payload,
        dogs: action.payload,
        
      };
    case "GET_NAME_DOGS":
      return {
        ...state,
        dogs: action.payload,
      };
     case "GET_TEMPERAMENTS":
       return {
         ...state,
         temperaments: action.payload,
       };
    case "FILTERED_BY_TEMPERAMENT":
      // const allTemperaments = state.temperaments
      // const dogsFiltered = action.payload === "All" ? allTemperaments : allTemperaments.filter(el=>el.temperament===action.payload) 

      const dogsFiltered = state.dogs.filter((el) =>
        el.temperament?.includes(action.payload) ? el : null
      );
      return {
        ...state,
        dogs: dogsFiltered,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
