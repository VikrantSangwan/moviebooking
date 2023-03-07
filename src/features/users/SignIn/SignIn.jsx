import React from "react";
import "./SignIn.css";
function SignIn() {
  return (
    <div className="signinContainer">
      <div className="signinForm">
        <h2 className="welcomeText">HELLO</h2>
        <h2 className="welcomeSubText">WELCOME BACK</h2>
        <div className="mb-3 form-control-group">
          <label className="form-label">Email</label>
          <input
            placeholder="Enter your Email"
            type="email"
            name="email"
            className="form-control"
          ></input>
        </div>
        <div className="mb-3 form-control-group">
          <label className="form-label">Password</label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            className="form-control"
          ></input>
        </div>

        <div className="linkWrapper mb-3">
          <span>
            <input type="checkbox" className="remcheckbox"></input> &nbsp;
            <a href="">Remember Password</a>
          </span>
          <a href="">Forgot Password</a>
        </div>
        <div className="btn-wrapper">
          <button className="btn btn-primary m-3 signIn">Sign In</button>
        </div>
        <div className="logintextcontainer">
          <span className="loginText" htmlFor="">
            Don't have an account? &nbsp;&nbsp;
            <a className="loginLink" href="/signup">
              SignUp Now{" "}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
