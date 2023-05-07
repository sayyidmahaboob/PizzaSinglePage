//dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";

//css
import "./styles/App.css";
import "./styles/Navbar.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
