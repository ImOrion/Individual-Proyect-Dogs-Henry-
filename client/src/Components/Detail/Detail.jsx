import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail, emptyDetail} from "../../Redux/Actions/Actions";

export default function Detail(props) {
  const dispatch = useDispatch();
  const myDog = useSelector((state) => state.detail);
  
  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  },[]);

  useEffect (()=>{
    return ()=>{
        if(myDog){
            dispatch(emptyDetail())
        }
    }

},[dispatch,props.match.params.id])
  return (
    <div>
      <Link to="/home">
      <button>Back</button></Link>
      {myDog.length > 0 ? (
        <div>
          <h1>{myDog[0].name}</h1>
          <img alt={myDog.name} src={myDog[0].image} />
          <h3>Minimum Weight {myDog[0].min_weight}</h3>
          <h3>Maximum Weight {myDog[0].max_weight}</h3>
          <h3>Minimum Height {myDog[0].min_height}</h3>
          <h3>Maximum Height {myDog[0].max_height}</h3>
          <h3>Life Span {myDog[0].life_span}</h3>
          <h4>
            Temperaments{" "}
            {Array.isArray(myDog[0].temperament)
              ? myDog[0].temperament.map((temp) => temp.name + " ")
              : myDog[0].temperament}
          </h4>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
