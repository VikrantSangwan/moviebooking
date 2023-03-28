import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MovieCard.module.css";

function MovieCard(props) {
  let navigate = useNavigate();
  function moviedetail(movid) {
    console.log(movid);
    navigate("/moviedetail/" + movid);
  }

  return (
    <div
      className={styles.cardcontainer}
      onClick={() => moviedetail(props.movie._id)}
    >
      <div className={styles.cardimg}>
        <img src={props.movie.posterUrl} alt="" />
      </div>
      <div className={styles.cardcontent}>
        <div className={styles.cardheader}>
          <h5>{props.movie.name}</h5>
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
            <span>{props.movie.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
