import React from 'react'
import { Link } from 'react-router-dom'


export default function Welcome() {
  return (
    <div>
      <h1>The Dogs App!</h1>
      <Link to="/home">
        <button>Start!</button>
      </Link>
    </div>
  )
}
