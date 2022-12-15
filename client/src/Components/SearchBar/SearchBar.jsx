import {React,useState} from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../Redux/Actions/Actions";

export default function SearchBar(props) {

    const [stateInput,setStateInput]=useState("")
    const onSearch=(event)=>{
      setStateInput(event.target.value)
    }
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
        <input onChange={onSearch} type="text" />
        <button onClick={()=>props.onSearch(stateInput)}>Buscar</button>
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
