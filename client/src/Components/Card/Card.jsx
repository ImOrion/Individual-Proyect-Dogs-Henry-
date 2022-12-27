import React from 'react'
import styles from "./Card.css"
import { Link } from 'react-router-dom'
export const Card =(props)=> {
  console.log(props)
  return (
    <div className="Card">
      <Link to={`detail/${props.id}`}><h3>Name: {props.name}</h3></Link>
      <h3>Temperament: {props.temperament}</h3>
      <h3>Min Weight: {props.minWeight}Kg</h3>
      <h3>Max Weight: {props.maxWeight}Kg</h3>
      <img alt={props.id} src={props.image}/>
    </div>
  )
}
