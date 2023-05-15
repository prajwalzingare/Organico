import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Footer, LandingPage, NavBar } from "components";
import Wishlist from "components/wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Wishlist />} />
        <Route path="/cart" element={<Wishlist />} />
        <Route path="*" element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
