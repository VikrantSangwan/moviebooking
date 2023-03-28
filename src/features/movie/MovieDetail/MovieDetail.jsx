import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../shared/NavBar/Navbar";
import "./MovieDetail.module.css";

function MovieDetail() {
  let movid = useParams();
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="bannerImg">
          <h2>This is testing.</h2>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
