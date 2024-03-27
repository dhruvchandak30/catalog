import React from "react";
import OP1 from "./Assets/OP1.png";
import OP2 from "./Assets/OP2.png";

const OutPartners = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:m-16 m-8 justify-center items-center">
      <div className="lg:text-left" data-aos="flip-up" >
        <div className="text-2xl my-2 font-semibold font-sans text-slate-700">
          Our Partners
        </div>
        <div className="lg:w-2/3 text-lg text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus luctus.
        </div>
      </div>
      <div className=" flex lg:flex-row flex-col lg:w-2/3 lg:m-0 ml-20">
        <div data-aos="flip-up" data-aos-delay="1000" >
          <img
            alt="Our Partners"
            className="w-1/2 brightness-50 saturate-0 "
            src={OP1}
          ></img>
        </div>
        <div data-aos="flip-up" data-aos-delay="1000" >
          <img
            alt="Our Partners"
            className="w-1/2 brightness-50 saturate-0"
            src={OP2}
          ></img>
        </div>
        <div data-aos="flip-up" data-aos-delay="1000" >
          <img
            alt="Our Partners"
            className="w-1/2 brightness-50 saturate-0"
            src={OP1}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default OutPartners;
