import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {cambiarPag, getDogs, getTemperaments, getNameDogs, fiteredByTemperament, filterCreated,
orderByLetter} from "../../Redux/Actions/Actions";

export default function SearchBar(props) {

  const dispatch = useDispatch();

  const [stateInput, setStateInput] = useState(""); //value del input
  
  const allTemperaments = useSelector((state) => state.temperaments);

  

  const onSearch = (event) => {
    setStateInput(event.target.value);
  };



  const clickReset = (e) => {
    e.preventDefault();

    dispatch(getDogs());
  };

  const orderSort = (e) => {
    e.preventDefault();
    dispatch(orderByLetter(e.target.value));
    dispatch(cambiarPag(1))
  };

  // const orderSort = (e) => {
  //   e.preventDefault();
  //   setOrder(e.target.value);
  //   dispatch(orderByLetter(e.target.value));
  // };

  const filteredTemperament = (e) => {
    dispatch(fiteredByTemperament(e.target.value));
  };
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  useEffect(()=>{
    dispatch(getNameDogs(stateInput))
  },[stateInput])
  
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
        <input type="text" onChange={(event) => onSearch(event)}/>
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
        <option selected disabled>Alfabeticamente</option>
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
