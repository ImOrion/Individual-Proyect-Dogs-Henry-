import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail, emptyDetail } from "../../Redux/Actions/Actions";
import styles from "./Detail.module.css";

export default function Detail(props) {
  const dispatch = useDispatch();
  const myDog = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  },[dispatch]);

  useEffect(() => {
    return () => {
      if (myDog) {
        dispatch(emptyDetail());
      }
    };
  }, [dispatch]);
  return (
    <div className={styles.container}>
      
      {myDog.length > 0 ? (
        <div className={styles.datasection}>
          <div className={styles.image}><img className={styles.img} alt={myDog.name} src={myDog[0].image} /></div>
          <h1>{myDog[0].name}</h1>
          <div className={styles.info}>
          <span>Minimum Weight <h3>{myDog[0].min_weight}</h3></span>
          <span>Maximum Weight <h3>{myDog[0].max_weight}</h3></span>
          <span>Minimum Height <h3>{myDog[0].min_height}</h3></span>
          <span>Maximum Height <h3>{myDog[0].max_height}</h3></span>
          <span>Life Span <h3>{myDog[0].life_span}</h3></span>
          <span>
            Temperaments {" "}<br/>
            {Array.isArray(myDog[0].temperament)
              ? myDog[0].temperament.map((temp) => temp.name + " ")
              : myDog[0].temperament}
          </span>
          </div>
          <div className={styles.back}>
        
      </div>
      <div className={styles.containerButton}><Link to="/home">
          <button className={styles.backButton}>Back</button>
        </Link>
        </div>
        </div>
      ) : (
          <div>
            <img alt="loading" src="https://i.pinimg.com/originals/d2/99/40/d2994005233783287041f6b90980546b.gif"/>
          <p>Loading...</p>
          </div>
      )}
    </div>
  );
}
