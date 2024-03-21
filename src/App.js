import React, { useEffect } from "react";
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
import ItemPage from "./components/Products/ItemPage";
import Error from "./components/Error";
import Footer from "./components/Footer";
import IndividualProductPage from "./components/Products/IndividualProductPage";
import IndivElementPage from "./components/Landing/IndivElementPage";
import Element from "./components/Landing/Element";
import AOS from "aos";
import "aos/dist/aos.css";
import Scroll from "./components/Assets/Scroll.jpeg";

function App() {
  const ScrollTopHandler = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <div className="App" onLoad={ScrollTopHandler}>
        <Navbar />
        <div
          className="TopToScroll fixed cursor-pointer right-4 bottom-4  z-[1000] rounded-full w-14"
          onClick={ScrollTopHandler}
        >
          <img alt="ScrollTop" src={Scroll} className=" rounded-full"></img>
        </div>
        <hr className="bg-slate-500 h-[2px]"></hr>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/metals" element={<Element />} />
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
