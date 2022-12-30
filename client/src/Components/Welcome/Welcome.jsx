import React from "react";
import { Link } from "react-router-dom";
import styles from "../Welcome/Welcome.css";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <h1>The Dogs App!</h1>
      <Link to="/home">
      <span><span></span></span>
      </Link>
      
    </div>
  );
}
