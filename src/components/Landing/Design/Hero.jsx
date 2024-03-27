import React from "react";
import Contact from "../../Contact";
import img1 from "./Assets/img1.jpg";
import img2 from "./Assets/img-2.jpg";
import "./design.css";
import Navbar from "../../Navbar/Navbar";
import "../../Navbar/Navbar.css";

const Hero = () => {
  return (
    <div className="lg:h-screen  h-full HeroBg  text-white ">
      <Navbar />
      <div className=" flex lg:flex-row flex-col justify-evenly items-center align-middle my-16 gap-16">
        <div data-aos="fade-up"
             data-aos-duration="2000" className="flex flex-col lg:p-4 pl-4 gap-8 text-left    justify-center">
          <div
             
            className=" lg:text-7xl text-4xl font-semibold font-sans"
          >
            The Kitchenware<br></br> of Your Dreams
          </div>
          <div className="flex text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            adipiscing.
          </div>
          <div className="">
            <input
              className="p-2.5 lg:w-[20rem] text-black  rounded-l-2xl"
              type="email"
              placeholder="Gmail"
            ></input>
            <label className="lg:p-2 p-2.5 lg:text-lg cursor-pointer rounded-r-2xl text-white bg-[#84a98c] hover:bg-[#6f8e76]">
              Submit Button
            </label>
          </div>

          <div className="flex flex-row justify-start lg:gap-16 gap-4 ">
            <div className="flex flex-col font-bold gap-4">
              <div className="text-5xl">33+</div>
              <div className=" text-xl">Variety</div>
            </div>
            <div className="flex flex-col font-bold gap-4">
              <div className="text-5xl">100+</div>
              <div className=" text-xl">Projects</div>
            </div>
            <div className="flex flex-col font-bold gap-4">
              <div className="text-5xl">200+</div>
              <div className=" text-xl">Clients</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center lg:w-2/5 gap-4">
          <div className=""data-aos="fade-up"
             data-aos-duration="2000">
            <img
              alt="Kitchen"
              className="img1  rounded-t-full"
              src={img1}
            ></img>
          </div>
          <div className="" data-aos="fade-up"
             data-aos-duration="2000">
            <img
              alt="Kitchen"
              className=" w-2/3  rounded-full"
              src={img2}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
