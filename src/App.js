import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductsPage from "./components/Products/ProductsPage";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import About from "./components/About/About";
import Home from "./components/Landing/Home";
import ItemPage from "./components/ItemPage";
import Error from "./components/Error";
import Footer from "./components/Footer";
import IndividualProductPage from "./components/IndividualProductPage";
import IndivElementPage from "./components/Landing/IndivElementPage";

function App() {
  const ScrollTopHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Router>
      <div className="App" onLoad={ScrollTopHandler}>
        <Navbar />
        <hr className="bg-black"></hr>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<ProductsPage />} />
          <Route
            path="/categories/:categoryId/:productId"
            element={<ItemPage />}
          />
          <Route
            path="/category/:category"
            element={<IndividualProductPage />}
          />
          <Route path="/element/:element" element={<IndivElementPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
