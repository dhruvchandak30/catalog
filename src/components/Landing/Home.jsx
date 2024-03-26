import React from "react";
import Carousel from "./Carousel";
import ChooseUs from "./ChooseUs";
import IndianMarket from "./IndianMarket";
import PopularProducts from "./PopularProducts";
import Element from "./Element";
import Carding from "../Card";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./Design/Hero";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {/* <Carousel /> */}
      {/* <PopularProducts /> */}
      {/* <ChooseUs /> */}
      {/* <IndianMarket /> */}
      {/* <Carding /> */}
      <Hero />
    </div>
  );
};

export default Home;
