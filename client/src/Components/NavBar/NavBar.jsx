import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "../NavBar/NavBar.css"

export default function NavBar(props) {
  return (
    <div className="NavBar">
      <Link to="home" className="NamePage">DOGS APP</Link>
      <SearchBar onSearch={props.onSearch} />
      <Link to="/createDog">Crear Perro</Link>
    </div>
  );
}
