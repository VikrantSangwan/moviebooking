import "./Banner.css";
import React from "react";

function Banner() {
  return (
    <div className="banner">
      <div className="bg-fixed-img"></div>
      <div className="bannerContainer">
        <h1 className="header1">
          GET <span className="header2">MOVIE</span> TICKETS
        </h1>
        <p>Buy movie tickets in advance, find movie times watch trailers,</p>
        <p>read movie reviews and much more</p>
      </div>
    </div>
  );
}

export default Banner;
