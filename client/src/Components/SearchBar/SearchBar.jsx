import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs,getTemperaments, getNameDogs,fiteredByTemperament } from "../../Redux/Actions/Actions";

export default function SearchBar(props) {

  const [stateInput, setStateInput] = useState(""); //value del input

  const allTemperaments=useSelector((state)=>state.temperaments)


  const onSearch = (event) => {
    setStateInput(event.target.value);
  };
  
  const functionClick = () => {
    dispatch(getNameDogs(stateInput))
  };

  const dispatch = useDispatch();

  const clickReset = (e) => {
    e.preventDefault();
    
    dispatch(getDogs());
  };

  const filteredTemperament=(e)=>{
    dispatch(fiteredByTemperament(e.target.value))
    console.log(e.target.value)
  }

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);
  
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
        <input type="text" onChange={(event) => onSearch(event)}  />
        <button type="submit" onClick={() => functionClick()}>
          Search
        </button>
      </div>
        
      <div>

        <select onChange={e=>filteredTemperament(e)}>
          <option value="All">All Temperaments</option>
          {allTemperaments?.map((el)=>
            (
          
              <option key={el.id} value={el.name}>{el.name}</option>
            )
          )
          }
        </select>
        <select>
        <option value="AnyWeight">Any Weight</option>
        <option value="WeightAscendent">Weight Ascendent</option>
        <option value="WeightDescendent">Weight Descendent</option>
        </select>
        <select>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select>
           <option value="AllBreeds">All Breeds</option>
           <option value="APIBreeds">API Breeds</option>
           <option value="DataBaseBreeds">Data Base Breeds</option>
        </select>
      </div>
    </div>
  );
}
