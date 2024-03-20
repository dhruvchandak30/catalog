import React from "react";
import Carousel from "./Carousel";
import ChooseUs from "./ChooseUs";
import IndianMarket from "./IndianMarket";
import PopularProducts from "./PopularProducts";
import Element from "./Element";
import Carding from "../Card";
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Carousel />
      <ChooseUs />
      <PopularProducts />
      <IndianMarket />
      {/* <Carding /> */}
    </div>
  );
};

export default Home;
