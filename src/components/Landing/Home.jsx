import React from "react";
import Carousel from "./Carousel";
import ChooseUs from "./ChooseUs";
import IndianMarket from "./IndianMarket";
import PopularProducts from "./PopularProducts";
import Element from "./Element";

const Home = () => {
  return (
    <div>
      <Carousel />
      <ChooseUs />
      <PopularProducts />
      <Element />
      <IndianMarket />
    </div>
  );
};

export default Home;
