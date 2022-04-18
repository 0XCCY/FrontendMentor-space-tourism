import "./App.css";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <div className="absolute z-50 sm:relative md:h-[20%]">
        <NavBar />
      </div>
      <Home />
    </div>
  );
}

export default App;
