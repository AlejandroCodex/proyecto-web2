import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Footer from "./components/Footer";

import "./App.css"
import SingUp from "./components/SingUp";
import Productos from "./components/Productos";
import Login from "./components/Login";
import Creditos from "./components/Creditos";

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/singup" element={<SingUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/creditos" element={<Creditos/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
