import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Navbar from "../../shared/NavBar/Navbar";

function Home() {
  return (
    <div className="homeContainer">
      <Navbar />
      <Banner />
    </div>
  );
}
export default Home;
