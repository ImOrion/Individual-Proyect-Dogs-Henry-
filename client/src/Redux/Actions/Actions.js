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
