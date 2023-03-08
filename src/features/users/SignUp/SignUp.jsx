import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signinContainer">
      <div className="signinForm">
        <h2 className="welcomeText">WELCOME</h2>
        <h2 className="welcomeSubText">TO BOLETO</h2>
        <div className="mb-3 form-control-group">
          <label className="form-label">EMAIL</label>
          <input type="email" name="email" className="form-control"></input>
        </div>
        <div className="mb-3 form-control-group">
          <label className="form-label">PASSWORD</label>
          <input
            type="password"
            name="password"
            className="form-control"
          ></input>
        </div>
        <div className="mb-3 form-control-group">
          <label className="form-label">CONFIRM PASSWORD</label>
          <input
            type="password"
            name="password"
            className="form-control"
          ></input>
        </div>
        <div className="btn-wrapper">
          <button className="btnformat signupBtn">Sign Up</button>
        </div>
        <div className="signupcontainer">
          <span className="loginText" htmlFor="">
            Already have an account? &nbsp;&nbsp;
            <a className="loginLink" href="/signup">
              Login{" "}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
