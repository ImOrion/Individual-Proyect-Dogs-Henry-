import { Cards } from "../Cards/Cards";
import NavBar from "../NavBar/NavBar"
import styles from "../Home/Home.css"
export default function Home() {

  return (
    <div className={styles.Home}>
      <div>
        <NavBar/>
        <Cards/>
      </div>
    </div>
  );
}
