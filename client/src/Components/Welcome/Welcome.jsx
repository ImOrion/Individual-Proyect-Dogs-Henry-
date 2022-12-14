import React from 'react'
import { Link } from 'react-router-dom'


export default function Welcome() {
  return (
    <div>
      <h1>LLEGAMOS HPTAAAAAAAAA!</h1>
      <Link to="/home">
        <button>Lets Go!</button>
      </Link>
    </div>
  )
}
