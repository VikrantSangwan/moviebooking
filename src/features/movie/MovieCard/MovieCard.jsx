import React from "react";
import styles from "./MovieCard.module.css";

function MovieCard() {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.cardimg}>
        <img
          src="https://pixner.net/boleto/demo/assets/images/movie/movie01.jpg"
          alt=""
        />
      </div>
      <div className={styles.cardcontent}>
        <div className={styles.cardheader}>
          <h3>Alone</h3>
        </div>
        <hr />
        <div className={styles.cardrating}>
          <div>
            <img src="https://pixner.net/boleto/demo/assets/images/movie/tomato.png"></img>
            &nbsp;&nbsp;
            <span>88%</span>
          </div>
          <div>
            <img
              src="https://pixner.net/boleto/demo/assets/images/movie/cake.png"
              alt=""
            />
            &nbsp;&nbsp;
            <span>88%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
