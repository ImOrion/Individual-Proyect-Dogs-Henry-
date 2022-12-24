import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  getTemperaments,
  getNameDogs,
  fiteredByTemperament,
  filterCreated,
  orderByLetter,
} from "../../Redux/Actions/Actions";

export default function SearchBar(props) {

  const dispatch = useDispatch();

  const [order, setOrder] = useState("");
  const [stateInput, setStateInput] = useState(""); //value del input
  const allTemperaments = useSelector((state) => state.temperaments);

  

  const onSearch = (event) => {
    setStateInput(event.target.value);
  };

  const functionClick = () => {
    dispatch(getNameDogs(stateInput));
  };

  const clickReset = (e) => {
    e.preventDefault();

    dispatch(getDogs());
  };

  const orderSort = (e) => {
    e.preventDefault();
    dispatch(orderByLetter(e.target.value));
    setOrder(`Ordered by ${e.target.value}`);
  };

  const filteredTemperament = (e) => {
    dispatch(fiteredByTemperament(e.target.value));
  };
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const createdFilter = (e) => {
    dispatch(filterCreated(e.target.value));
  };


  return (
    <div>
      <button
        onClick={(e) => {
          clickReset(e);
        }}
      >
        Volver a cargar todos los perros
      </button>

      <div>
        <input type="text" onChange={(event) => onSearch(event)} />
        <button type="submit" onClick={() => functionClick()}>
          Search
        </button>
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
        <select>
          <option value="AnyWeight">Any Weight</option>
          <option value="WeightAscendent">Weight Ascendent</option>
          <option value="WeightDescendent">Weight Descendent</option>
        </select>
        <select onChange={(e) => orderSort(e)}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select onChange={(e) => createdFilter(e)}>
          <option value="AllBreeds">All Breeds</option>
          <option value="APIBreeds">API Breeds</option>
          <option value="DataBaseBreeds">Data Base Breeds</option>
        </select>
      </div>
    </div>
  );
}
