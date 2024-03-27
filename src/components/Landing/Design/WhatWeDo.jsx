import React from "react";
import img1 from "./Assets/img1.jpg";
import "./design.css";

const WhatWeDo = () => {
  return (
    <div className="flex flex-col text-center gap-8 items-center my-8">
      <div className="lg:text-6xl font-sans font-bold text-4xl text-[#32444a]">
        What We Do
      </div>
      <div className="text-xl text-slate-600 lg:w-1/2 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </div>
      <div className="flex lg:flex-row flex-col justify-around gap-4 lg:mx-32 mx-6">
        <div className="flex flex-col text-left  border-2 border-slate-700 rounded-xl p-4">
          <div>
            <img
              alt="Design"
              src={img1}
              className="w-[5rem] h-[5rem] rounded-xl"
            ></img>
          </div>
          <div className="text-2xl font-sans font-semibold text-[#32444a]">
            Kitchen Design
          </div>
          <div className="text-slate-600 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus luctus nec.
          </div>
        </div>
        <div className="flex flex-col text-left text-white  WWD  border-2 border-slate-700 rounded-xl p-4">
          <div>
            <img
              alt="Design"
              src={img1}
              className="w-[5rem] h-[5rem] rounded-xl"
            ></img>
          </div>
          <div className="text-2xl  font-sans font-semibold">
            Kitchen Design
          </div>
          <div className="text-white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus luctus nec.
          </div>
        </div>
        <div className="flex flex-col text-left  border-2 border-slate-700 rounded-xl p-4">
          <div>
            <img
              alt="Design"
              src={img1}
              className="w-[5rem] h-[5rem] rounded-xl"
            ></img>
          </div>
          <div className="text-2xl font-sans font-semibold text-[#32444a]">
            Kitchen Design
          </div>
          <div className="text-slate-600 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus luctus nec.
          </div>
        </div>
        <div className="flex flex-col text-left  border-2 border-slate-700 rounded-xl p-4">
          <div>
            <img
              alt="Design"
              src={img1}
              className="w-[5rem] h-[5rem] rounded-xl"
            ></img>
          </div>
          <div className="text-2xl font-sans font-semibold text-[#32444a]">
            Kitchen Design
          </div>
          <div className="text-slate-600 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus luctus nec.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
