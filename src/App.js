import "./App.css";
import SignIn from "./features/users/SignIn/SignIn";
import Home from "./features/movie/Home/Home";

function App() {
  return (
    <div className="App">
      <SignIn />
      <Home />
    </div>
  );
}

export default App;
