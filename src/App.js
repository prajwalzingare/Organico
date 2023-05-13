import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { LandingPage, NavBar } from "components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
