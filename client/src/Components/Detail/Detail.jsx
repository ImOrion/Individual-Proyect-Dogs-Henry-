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
  }, []);

  useEffect(() => {
    return () => {
      if (myDog) {
        dispatch(emptyDetail());
      }
    };
  }, [dispatch, props.match.params.id]);
  return (
    <div className={styles.container}>
      
      {myDog.length > 0 ? (
        <div className={styles.datasection}>
          <div className={styles.image}><img className={styles.img} alt={myDog.name} src={myDog[0].image} /></div>
          <h1>{myDog[0].name}</h1>
          <div className={styles.info}>
          <h2>Minimum Weight <h4>{myDog[0].min_weight}</h4></h2>
          <h2>Maximum Weight <h4>{myDog[0].max_weight}</h4></h2>
          <h2>Minimum Height <h4>{myDog[0].min_height}</h4></h2>
          <h2>Maximum Height <h4>{myDog[0].max_height}</h4></h2>
          <h2>Life Span <h4>{myDog[0].life_span}</h4></h2>
          <h2>
            Temperaments: {" "}<br/>
            {Array.isArray(myDog[0].temperament)
              ? myDog[0].temperament.map((temp) => temp.name + " ")
              : myDog[0].temperament}
          </h2>
          </div>
          <div className={styles.back}>
        <div className={styles.containerButton}><Link to="/home">
          <button className={styles.backButton}>Back</button>
        </Link>
        </div>
      </div>
        </div>
      ) : (
          <div>
            <img src="https://i.pinimg.com/originals/d2/99/40/d2994005233783287041f6b90980546b.gif"/>
          <p>Loading...</p>
          </div>
      )}
    </div>
  );
}
