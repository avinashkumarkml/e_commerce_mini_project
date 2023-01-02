import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Shoppage from "./Pages/Shoppage";
import ProductDetails from "./Pages/ProductDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collections/all" element={<Shoppage />} />
        <Route path="/collections/all/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
