import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Banner from "../Banner/Banner";
import Navbar from "../../shared/NavBar/Navbar";
import SearchPanel from "../SearchPanel/SearchPanel";
import MovieCard from "../MovieCard/MovieCard";

function Home() {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/movie")
      .then((res) => res.json())
      .then((movies) => {
        setMovies(movies);
      });
  }, []);

  return (
    <div className={styles.homecontainer}>
      <Navbar />
      <Banner />
      <SearchPanel />
      <div className={styles.movies}>
        <div className="row">
          {Movies.map((mov) => (
            <div className="col-md-2" key={mov.id}>
              <MovieCard movie={mov} key={mov.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
