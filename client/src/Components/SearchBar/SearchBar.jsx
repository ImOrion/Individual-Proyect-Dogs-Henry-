import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  getDogs,
  getTemperaments,
  getNameDogs,
  fiteredByTemperament,
  filterCreated,
  orderByLetter,
  orderByWeight,
} from "../../Redux/Actions/Actions";
import validate from "./Errors/Errors";

export default function SearchBar(props) {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperaments);
  const [errors, setErrors] = useState("");
  const [stateInput, setStateInput] = useState(""); //value del input
  const [name, setName] = useState("");
  const [filter,setFilter]=useState(false);


  const onSearch = (event) => {
    event.preventDefault();
    dispatch(getNameDogs(name));
  };
  const onChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
    setErrors(validate(event.target.value));
  };

  const clickReset = (e) => {
    e.preventDefault();
    dispatch(getDogs());
  };

  const orderLetterSort = (e) => {
    e.preventDefault();
    dispatch(orderByLetter(e.target.value));
    dispatch(changePage(1));
  };

  const orderWeightSort = (e) => {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    dispatch(changePage(1));
  };

  const filteredTemperament = (e) => {
    dispatch(fiteredByTemperament(e.target.value));
    dispatch(changePage(1));
  };
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNameDogs(stateInput));
  }, [stateInput]);

  const createdFilter = (e) => {
    dispatch(filterCreated(e.target.value));
  };

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => onChange(e)} />
        <button onClick={(event) => onSearch(event)}>Search</button>
        {errors !== "" ? <span>{errors}</span> : <span></span>}
      </div>

      <div>
        <select onChange={(e) => filteredTemperament(e)}>
          <option value="All">All Temperaments</option>
          {allTemperaments?.map((el) => (
            <option key={el.id} value={el.name}>
              {el.name}
            </option>
          ))}
        </select>
        <select onChange={(e) => orderWeightSort(e)}>
          <option hidden>Order by weight</option>
          <option value="WeightAscendent">Weight Ascendent</option>
          <option value="WeightDescendent">Weight Descendent</option>
        </select>
        <select onChange={(e) => orderLetterSort(e)}>
          <option hidden>Order alphabetically</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select onChange={(e) => createdFilter(e)}>
          <option value="AllBreeds">All Breeds</option>
          <option value="APIBreeds">API Breeds</option>
          <option value="DataBaseBreeds">Data Base Breeds</option>
        </select>
        <button
          onClick={(e) => {
            clickReset(e);
          }}
        >
          Volver a cargar todos los perros
        </button>
      </div>
    </div>
  );
}
