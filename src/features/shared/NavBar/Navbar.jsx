import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbarcontainer">
      <div className="navbar">
        <div className="navbar-brand logo">
          <img
            src="https://pixner.net/boleto/demo/assets/images/logo/logo.png"
            alt=""
          />
        </div>
        <div className="menucontainer">
          <div className="menuItem">Home</div>
          <div className="menuItem">Contact</div>
        </div>
        <div className="joinusbtn">
          <button className="btnformat navbarbtn">Join Us</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
