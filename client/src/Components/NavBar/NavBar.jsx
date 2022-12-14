import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

export default function NavBar(props) {
    
     
  return (
    <div>
        <SearchBar onSearch={props.onSearch}/>
        <Link to="/createdog">Crear Perro</Link>
    </div>
  )
}
