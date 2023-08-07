import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from './components/Cart'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="w-full h-screen overflow-hidden bg-white">
      <Navbar/>

      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
