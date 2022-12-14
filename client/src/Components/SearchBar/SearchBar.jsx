import {React,useState} from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../Redux/Actions/Actions";

export default function SearchBar() {

    const [stateInput,setStateInput]=useState("")

  const dispatch = useDispatch();

  const clickReset = (e) => {
    e.preventDefault();
    dispatch(getDogs());
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
        <input type="text" />
        <button>Buscar</button>
      </div>

      <div>
        <select>
          <option value="Temperament">Temperament</option>
          <option value="Breed">Breed</option>
        </select>
        <select>
          <option value="Weight">Weight</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
    </div>
  );
}
