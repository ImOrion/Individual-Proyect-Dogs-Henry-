import React from 'react'
import styles from "./Card.css"
import { Link } from 'react-router-dom'
export const Card =(props)=> {

  return (
    <div className={styles.Card}>
      <Link to={`detail/${props.id}`}><h3>Name: {props.name}</h3></Link>
      <h3>Temperament: {props.temperament}</h3>
      {props.Temperaments?props.Temperaments.map((ele)=><h3>{ele.name}</h3>):<p></p>}
      <h3>Min Weight: {props.minWeight}Kg</h3>
      <h3>Max Weight: {props.maxWeight}Kg</h3>
      <img alt={props.id} src={props.image}/>
    </div>
  )
}
