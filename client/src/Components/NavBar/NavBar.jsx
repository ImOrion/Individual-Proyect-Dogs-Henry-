import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar(props) {
  return (
    <div>
      <Link to="home">DOGS APP</Link>
      <SearchBar onSearch={props.onSearch} />
      <Link to="/createDog">Crear Perro</Link>
    </div>
  );
}
