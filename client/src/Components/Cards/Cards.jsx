import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../Redux/Actions/Actions";
import { Card } from "../Card/Card";
import styles from "./Cards.css"


export const Cards = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className="Cards">
      {allDogs?.map((ele) => {
        return (
          <div key={ele.id} >
            <Card
              id={ele.id}
              image={ele.image}
              name={ele.name}
              temperament={ele.temperament}
              minWeight={ele.min_weight}
              maxWeight={ele.max_weight}
            />
          </div>
        );
      })}
    </div>
  );
};
