import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const IndianMarket = () => {
  AOS.init()
  const Data = [
    {
      title: "METAL BASE",
      desc: "With over 50 per cent of India’s workforce involved in the agriculture sector, the country is one of the leading agriculture exporters.",
    },
    {
      title: "BEST QUALITY FOOD PRODUCTS",
      desc: "Any food product manufactured in India goes through quality assurance tests and certifications to ensure that they are of high quality.",
    },
    {
      title: "DIVERSITY OF INDIA AND INDIAN CULTURE",
      desc: "The diverse Indian cultures are the reason behind the diversified food products available. With each region of the country possessing its own blend and flavour, no country does this better.",
    },
    {
      title: "AFFORDABLE RATES",
      desc: "Cheap labour and raw materials allow India to produce spices, oils, and other food products at great affordable rates.",
    },
    {
      title: "VARIETY OF SPICES AND TASTES",
      desc: "Being known as the land of spices, the country is the leading producer of spices. The country boasts of a huge variety of spices providing a great range of flavour.",
    },
    {
      title: "TECHNOLOGY AND INNOVATION",
      desc: "In a land blessed with great scientific minds, India’s technological advancements and innovation have made international trade all the easier, making it the perfect choice.",
    },
  ];
  return (
    <div className="lg:p-8 lg:m-8 text-white">
      <div
        data-aos="fade-up"
        // data-aos-offset="200"
        data-aos-delay="550"
        className="text-4xl text-slate-600 font-bold my-8"
      >
        WHY INDIAN MARKET IS BEST ?
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:mx-8 F m-4 ">
        <div
          data-aos="fade-down"
          class="flex flex-col  lg:p-4 gap-3 rounded-xl bg-[#AB0C0A] text-left  p-2"
        >
          <div className="text-2xl font-semibold ">{Data[0].title}</div>
          <div className="text-xl text-slate-200">{Data[0].desc}</div>
        </div>
        <div
          data-aos="fade-down"
          class="flex flex-col  lg:p-4 gap-3 rounded-xl bg-[#AB0C0A] text-left  p-2"
        >
          <div className="text-2xl font-semibold ">{Data[1].title}</div>
          <div className="text-xl text-slate-200">{Data[1].desc}</div>
        </div>
        <div
          data-aos="fade-down"
          class="flex flex-col  lg:p-4 gap-3 rounded-xl bg-[#AB0C0A] text-left p-2 "
        >
          <div className="text-2xl font-semibold ">{Data[2].title}</div>
          <div className="text-xl text-slate-200">{Data[2].desc}</div>
        </div>
        <div
          data-aos="fade-down"
          class="flex flex-col  lg:p-4 gap-3 rounded-xl bg-[#AB0C0A] text-left  p-2"
        >
          <div className="text-2xl font-semibold ">{Data[3].title}</div>
          <div className="text-xl text-slate-200">{Data[3].desc}</div>
        </div>
        <div
          data-aos="fade-down"
          class="flex flex-col  lg:p-4 gap-3 rounded-xl bg-[#AB0C0A] text-left p-2 "
        >
          <div className="text-2xl font-semibold ">{Data[4].title}</div>
          <div className="text-xl text-slate-200">{Data[4].desc}</div>
        </div>
        <div
          data-aos="fade-down"
          class="flex flex-col  lg:p-4 gap-3 rounded-xl bg-[#AB0C0A] text-left p-2 "
        >
          <div className="text-2xl font-semibold ">{Data[5].title}</div>
          <div className="text-xl text-slate-200">{Data[5].desc}</div>
        </div>
      </div>
    </div>
  );
};

export default IndianMarket;
