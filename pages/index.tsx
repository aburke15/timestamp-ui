import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Timestamp from "./components/Timestamp";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Timestamp />
    </div>
  );
};

export default Home;
