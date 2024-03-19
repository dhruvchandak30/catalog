import React from "react";
import Carousel from "./Carousel";
import ChooseUs from "./ChooseUs";
import IndianMarket from "./IndianMarket";
import PopularProducts from "./PopularProducts";

const Home = () => {
  return (
    <div>
      <Carousel />
      <ChooseUs />
      <PopularProducts />
      <IndianMarket />
    </div>
  );
};

export default Home;
