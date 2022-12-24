import { React,useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../Redux/Actions/Actions";
import { Card } from "../Card/Card";
import styles from "./Cards.css"
import {Paginated} from "../Paginated/Paginated"

export const Cards = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const currentPage = useSelector(state => state.currentPage)


 const [charactersPerPage, setCharactersPerPage] = useState(8); //cuantas recetas x pagina
 const indexOfLastCharacter = currentPage * charactersPerPage; //pagina x cantidad  recetas en pagina
 const indexOfFirsChararacter = indexOfLastCharacter - charactersPerPage;
 const currentCharacters = allDogs.slice(indexOfFirsChararacter, indexOfLastCharacter); //agarra el indice del primero y del ultimo pj

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);



  return (

    
    <div className="Cards">
      <Paginated charactersPerPage={charactersPerPage}
                allDogs={allDogs.length}
                currentPage={currentPage}/>
      {currentCharacters?.map((ele) => {
        return (

          <div key={ele.id} >
            <Card
              id={ele.id}
              image={ele.image}
              name={ele.name}
              temperament={ele.temperament}
              minWeight={ele.min_weight}
              maxWeight={ele.max_weight}
              minHeight={ele.min_height}
              maxHeight={ele.max_height}
            />
          </div>
        );
      })}
      

    </div>
  );
};
