import axios from "axios";

export const getDogs = () => {
  return async (dispatch) => {
    const data = await axios.get("http://localhost:3001/dogs");
    return dispatch({
      type: "GET_DOGS",
      payload: data.data,
    });
  };
};

export const getTemperaments = () => {
  return async (dispatch) => {
    const data = await axios.get("http://localhost:3001/temperaments");
    return dispatch({
      type: "GET_TEMPERAMENTS",
      payload: data.data,
    });
  };
};

export const getNameDogs = (name) => {
  return async (dispatch) => {
    var json = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    return dispatch({
      type: "GET_NAME_DOGS",
      payload: json.data,
    });
  };
};

export const fiteredByTemperament = (payload) => {
  return {
    type: "FILTERED_BY_TEMPERAMENT",
    payload,
  };
};

export const filterCreated = (payload) => {
  return {
    type: "FILTER_CREATED",
    payload,
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/dogs/${id}`);
    return dispatch({
      type: "GET_DETAIL",
      payload: json.data,
    });
  };
};

export const orderByLetter = (payload) => {
  return {
    type: "ORDER_BY_LETTER",
    payload,
  };
};

export const orderByWeight = (payload) => {
  return {
    type: "ORDER_BY_WEIGHT",
    payload,
  };
};

export const changePage = (Pagenumber) => {
  return {
    type: "CHANGE_PAGE",
    payload: Pagenumber++,
  };
};

export const postDog =(payload)=>{
  return async (dispatch)=>{
    const response=await axios.post("http://localhost:3001/dogs/",payload)
    return response
  }
}

export const  emptyDetail = () => {
  return {
    type :"EMPTY_DETAIL",
    payload:[],
  }
}