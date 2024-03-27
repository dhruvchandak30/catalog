import React from "react";
import img1 from "./Assets/img1.jpg";
import team from "./Assets/team.png";
import proffesional from "./Assets/proffesional.png";
import quality from "./Assets/quality.png";
import "./design.css";

const ChooseUs = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-32 gap-4   lg:m-32 m-8">
      <div
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="1000"
        className="flex items-center justify-center"
      >
        <img
          alt="Choose Us"
          className="lg:h-full lg:w-full  w-1/2 rounded-t-full ChooseUs"
          src={img1}
        ></img>
      </div>
      <div className="flex flex-col gap-4 items-center ">
        <div className="lg:text-left flex flex-col gap-4">
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1000"
            className="text-5xl font-sans font-semibold text-[#173945d2]"
          >
            Why Choose Us
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1000"
            className="text-xl text-slate-600 lg:w-2/3"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>
        </div>
        <div className="flex flex-col m-2 gap-4">
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1000"
            className="flex flex-row gap-2"
          >
            <div>
              <img alt="quality" src={quality}></img>
            </div>
            <div className="flex flex-col text-left gap-3">
              <div className="text-2xl font-bold font-sans text-[#132d36d2]">
                Quality Design
              </div>
              <div className="text-slate-500 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1000"
            className="flex flex-row gap-2"
          >
            <div>
              <img alt="quality" src={team}></img>
            </div>
            <div className="flex flex-col text-left gap-3">
              <div className="text-2xl font-bold font-sans text-[#132d36d2]">
                Team Expert
              </div>
              <div className="text-slate-500 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1000"
            className="flex flex-row gap-2"
          >
            <div>
              <img alt="quality" src={proffesional}></img>
            </div>
            <div className="flex flex-col text-left gap-3">
              <div className="text-2xl font-bold font-sans text-[#132d36d2]">
                Proffesional
              </div>
              <div className="text-slate-500 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
