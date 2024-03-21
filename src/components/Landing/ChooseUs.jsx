import React from "react";
import AOS from "aos";
// import { TbHexagonNumber1 } from "react-icons/tb";
// import { TbHexagonNumber2 } from "react-icons/tb";
// import { TbHexagonNumber3 } from "react-icons/tb";
// import { TbHexagonNumber4 } from "react-icons/tb";
// import { TbHexagonNumber5 } from "react-icons/tb";
// import { TbHexagonNumber6 } from "react-icons/tb";
import Plate_1 from "../Assets/Plate_1.png";
import Plate_2 from "../Assets/Plate_1.png";
import Plate_3 from "../Assets/Plate_1.png";
import Plate_4 from "../Assets/Plate_1.png";
import Plate_5 from "../Assets/Plate_1.png";
import Plate_6 from "../Assets/Plate_1.png";

const ChooseUs = () => {
  // useEffect(() => {
  AOS.init();
  // }, []);
  const Data = [
    {
      title: "Get Buyers for Your Food Products",
      desc: "No matter the type of food or spice you plan on exporting, we will ensure that you get genuine buyers for your products who meet your expectations.",
    },
    {
      title: "Best quality food trading services",
      desc: "Our stringent policies make sure that food handling and trading is in accordance with international quality standards.",
    },
    {
      title: "Global Presence",
      desc: "Even if you are planning to export across multiple continents, we’ve got you covered. Our global presence will allow your products to be exported to various countries.",
    },
    {
      title: "Market Analysis & Up-to-date Market Information",
      desc: "Our thorough and regular analysis and research let us update our database with up to date information on the market and allows us to stay on top of every update.",
    },
    {
      title: "Reliable & Trusted Services",
      desc: "Trust is a pillar of our services. Our transparent and reliable operations ensure that you feel at ease with our services.",
    },
    {
      title: "Save your time & cost for searching markets",
      desc: "Understanding and researching the market by yourself can be expensive and time-consuming. But with Pisum, we will do that for you instead.",
    },
  ];
  return (
    <div className="lg:p-8 lg:m-8 text-white">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="450"
        className="text-4xl text-slate-600 font-bold my-8"
      >
        WHY CHOOSE US ?
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-8 text-black">
        <div
          data-aos="fade-down"
          class="flex  flex-row lg:p-4 gap-3 rounded-xl bg-[#D2D180] text-left items-center p-8"
        >
          <div>
            <img alt="1" src={Plate_1} className="rounded-full w-[6rem] "></img>
          </div>
          <div>
            <div className="text-2xl font-semibold ">{Data[0].title}</div>
            <div className="text-xl text-slate-600">{Data[0].desc}</div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          class="flex  flex-row lg:p-4 gap-3 rounded-xl bg-[#D2D180] text-left items-center p-8"
        >
          <div>
            <img alt="2" src={Plate_1} className="rounded-full w-[6rem] "></img>
          </div>
          <div>
            <div className="text-2xl font-semibold ">{Data[1].title}</div>
            <div className="text-xl text-slate-600">{Data[1].desc}</div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          class="flex  flex-row lg:p-4 gap-3 rounded-xl bg-[#D2D180] text-left items-center p-8"
        >
          <div>
            <img alt="3" src={Plate_1} className="rounded-full w-[6rem] "></img>
          </div>
          <div>
            <div className="text-2xl font-semibold ">{Data[2].title}</div>
            <div className="text-xl text-slate-600">{Data[2].desc}</div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          class="flex  flex-row lg:p-4 gap-3 rounded-xl bg-[#D2D180] text-left items-center p-8"
        >
          <div>
            <img alt="4" src={Plate_1} className="rounded-full w-[6rem] "></img>
          </div>
          <div>
            <div className="text-2xl font-semibold ">{Data[3].title}</div>
            <div className="text-xl text-slate-600">{Data[3].desc}</div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          class="flex  flex-row lg:p-4 gap-3 rounded-xl bg-[#D2D180] text-left items-center p-8"
        >
          <div>
            <img alt="5" src={Plate_1} className="rounded-full w-[6rem] "></img>
          </div>
          <div>
            <div className="text-2xl font-semibold ">{Data[4].title}</div>
            <div className="text-xl text-slate-600">{Data[4].desc}</div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          class="flex  flex-row lg:p-4 gap-3 rounded-xl bg-[#D2D180] text-left items-center p-8"
        >
          <div>
            <img alt="6" src={Plate_1} className="rounded-full w-[6rem] "></img>
          </div>
          <div>
            <div className="text-2xl font-semibold ">{Data[5].title}</div>
            <div className="text-xl text-slate-600">{Data[5].desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
