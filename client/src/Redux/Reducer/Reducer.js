const initialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
  currentPage:1
};

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
    case "FILTER_CREATED":
      const allDog = state.allDogs;
      const createdFilter =
        action.payload === "DataBaseBreeds"
          ? allDog.filter((el) => el.createdInDb)
          : allDog.filter((el) => !el.createdInDb);
      return {
        ...state,
        dogs: action.payload === "AllBreeds" ? state.allDogs : createdFilter,
      };
    case "FILTERED_BY_TEMPERAMENT":
      const dogsFiltered = state.allDogs.filter((el) =>
        el.temperament?.includes(action.payload) ? el : null
      );
      return {
        ...state,
        dogs: action.payload === "All" ? state.allDogs : dogsFiltered,
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
      case "CAMBIAR_PAGINA":
              return{
                  ...state,
                  currentPage: action.payload
              }
      case 'ORDER_BY_LETTER':
        const sortLetter= action.payload === 'A-Z' ?
            state.dogs.sort(function(a,b){
                if (a.name > b.name){
                    return 1
                }
                if (a.name < b.name){
                    return -1
                }
                return 0
            }) : 
            state.dogs.sort(function(a,b){
                if (a.name > b.name){
                    return -1
                }
                if (a.name < b.name){
                    return 1
                }
                return 0
            })
        return {
            ...state,
            dogs: sortLetter,
            currentPage:2
        }
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
