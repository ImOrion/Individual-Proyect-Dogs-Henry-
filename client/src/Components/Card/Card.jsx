import React from 'react'
import styles from "./Card.css"

export const Card =(props)=> {

  return (
    <div className="Card">
      <h3>Nombre: {props.name}</h3>
      <h3>Temperamento: {props.temperament}</h3>
      <h3>Peso minimo: {props.minWeight}Kg</h3>
      <h3>Peso maximo: {props.maxWeight}Kg</h3>
      <img alt={props.id} src={props.image}/>
    </div>
  )
}
