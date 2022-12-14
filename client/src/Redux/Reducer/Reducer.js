const initialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
  currentPage: 1,
  detail:[],
  filtros:{
    temp:"All",
    ordenamiento:"All",
    breed:"All"
  }
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
    case "EMPTY_DETAIL":
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "ORDER_BY_LETTER":
      const sortLetter =
        action.payload === "A-Z"
          ? state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortLetter,
        currentPage: 2,
      };
    case "ORDER_BY_WEIGHT":
      const sortWeight =
        action.payload === "WeightAscendent"
          ? state.dogs.sort(function (a, b) {
              if (parseInt(a.min_weight) > parseInt(b.min_weight)) {
                return 1;
              }
              if (parseInt(a.min_weight) < parseInt(b.min_weight)) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              if (parseInt(a.max_weight) > parseInt(b.max_weight)) {
                return -1;
              }
              if (parseInt(a.max_weight) < parseInt(b.max_weight)) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortWeight,
        currentPage: 2,
      };
    case "POST_DOG":
      return {
        ...state,
      };
      case "FILTER_TEMP":
        return{
          ...state,
          filtros:{...state.filtros,temp:action.payload},
          currentPage:1
        }
        case "FILTER_ORDER":
        return{
          ...state,
          filtros:{...state.filtros,ordenamiento:action.payload},
          currentPage:1
        }
        case "FILTER_BREED":
        return{
          ...state,
          filtros:{...state.filtros,breed:action.payload},
          currentPage:1
        }
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
