import React from 'react'
import styles from "../Card/Card.module.css"
import { Link } from 'react-router-dom'
export const Card =(props)=> {

  return (
    <div className={styles.Card}>
      <Link className={styles.linkCard} to={`detail/${props.id}`}>
      <h2 className={styles.nameDog}>{props.name}</h2>
      <h3>Temperament:<p>{props.temperament}</p></h3>
      {props.Temperaments?props.Temperaments.map((ele)=><h3>{ele.name}</h3>):<p></p>}
      <h3>Min Weight: {props.minWeight}Kg</h3>
      <h3>Max Weight: {props.maxWeight}Kg</h3>
      <img className={styles.img} alt={props.id} src={props.image}/>
      </Link>
    </div>
  )
}
