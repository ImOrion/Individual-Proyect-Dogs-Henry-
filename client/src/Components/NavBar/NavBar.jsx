import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from"../NavBar/NavBar.module.css"

export default function NavBar(props) {
  return (
    <div className={styles.NavBar}>
      <div className={styles.Home}><Link to="home" className="NamePage">DOGS APP</Link></div>
      <SearchBar onSearch={props.onSearch} />
      <Link to="/createDog">Crear Perro</Link>
    </div>
  );
}
