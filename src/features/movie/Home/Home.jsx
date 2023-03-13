import React from "react";
import styles from "./Home.module.css";
import Banner from "../Banner/Banner";
import Navbar from "../../shared/NavBar/Navbar";
import SearchPanel from "../SearchPanel/SearchPanel";

function Home() {
  return (
    <div className={styles.homecontainer}>
      <Navbar />
      <Banner />
      <SearchPanel />
    </div>
  );
}
export default Home;
