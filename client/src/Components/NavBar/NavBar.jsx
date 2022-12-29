import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from"../NavBar/NavBar.module.css"

export default function NavBar(props) {
  return (
    <div className={styles.NavBar}>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
