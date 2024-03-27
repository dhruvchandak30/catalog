import React from "react";
import img1 from "./Assets/img1.jpg";
import Carousel from "../Carousel";
import "./design.css";

export const AboutNirguna = () => {
  return (
    <div className="flex lg:flex-row flex-col  justify-center items-center AboutBg lg:pb-16 lg:px-32 px-8 lg:m-32">
      <div
        className=""
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        <img
          alt="Nirguna"
          src={img1}
          className="lg:w-2/3 rounded-b-full img2"
        ></img>
      </div>
      <div className="text-left lg:w-1/2">
        <div
          data-aos="fade-up"
          data-aos-delay="1200"
          data-aos-duration="1000"
          className="text-white my-8 text-5xl font-bold font-sans"
        >
          About Nirguna
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="1500"
          data-aos-duration="1000"
          className="text-white font-sans"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit.
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="2000"
          className=" my-8"
        >
          <Carousel />
        </div>
      </div>
    </div>
  );
};
