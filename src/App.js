import "./App.css";
import SignIn from "./features/users/SignIn/SignIn";
import Home from "./features/movie/Home/Home";
import SignUp from "./features/users/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App;
