import React from 'react'
import styles from "./Card.css"

export const Card =(props)=> {

  return (
    <div className="Card">
      <h3>Name: {props.name}</h3>
      <h3>Temperament: {props.temperament}</h3>
      <h3>Min Weight: {props.minWeight}Kg</h3>
      <h3>Max Weight: {props.maxWeight}Kg</h3>
      <img alt={props.id} src={props.image}/>
    </div>
  )
}
