import React from "react";
import AboutCard from "./AboutCard";
import ValueCard from "./ValueCard";

const About = () => {
  const data = [
    {
      title: "Our Mission",
      img: "https://pisumfoods.com/img/icon-img/mission.png",
      desc: "To cultivate, manufacture, process and serve best in class food retaining freshness and hygiene, fit for daily consumption.",
    },
    {
      title: "Our Vision",
      img: "https://pisumfoods.com/img/icon-img/vision.png",
      desc: "A globally recognized food company nourishing every day routine.",
    },
  ];

  const ValData = [
    {
      title: "Best Quality Services",
      img: "https://pisumfoods.com/img/icon-img/vision.png",
      desc: "When it comes to food, there must be no compromise. This is why we strive to provide you with the best quality services to ensure that the food stays healthy and fresh.",
    },
    {
      title: "Vast Experience in Food Trading",
      img: "https://pisumfoods.com/img/icon-img/vision.png",
      desc: "Trusted & Legally Approved Certified Services",
    },
    {
      title: "Trusted & Legally Approved Certified Services",
      img: "https://pisumfoods.com/img/icon-img/vision.png",
      desc: "Being a legally certified food export company in India, our services are transparent and trustworthy.",
    },
    {
      title: "Commitment & Time Adherence",
      img: "https://pisumfoods.com/img/icon-img/vision.png",
      desc: "Time is a huge factor when it comes to food. This is why, at Pisum, we are committed to ensuring that we get the job done on schedule without fail.",
    },
    {
      title: "Innovation",
      img: "https://pisumfoods.com/img/icon-img/vision.png",
      desc: "Using innovative methods and equipment, we ensure that the food is packaged and stored to the best.",
    },
  ];
  return (
    <div className=" flex  flex-col gap-8">
      <div>
        <img
          className="w-screen h-[15rem]"
          alt="About Us"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcD83P6iWvG5iJLJSEhxe1kkhf02ZFir_wvg&usqp=CAU"
        ></img>
      </div>
      <div class="flex lg:flex-row flex-col justify-around gap-16 lg:mx-32 mx-4 items-center">
        <div class="">
          <img
            className="w-screen rounded-xl"
            alt="Welcome"
            src="https://pisumfoods.com/img/banner/ship.jpg"
          ></img>
        </div>
        <div class="flex flex-col text-left   align-middle  ">
          <div class="text-4xl font-bold text-[#B2B377]">
            Welcome to Nirguna Exports
          </div>
          <div class=" text-slate-800 text-[18px] ">
            Pisum Food Services Private Limited incorporated in May 2015. Pisum
            Foods is an initiative by the BTW Group (est. 2011), focusing on
            providing food services. With immense experience in the food
            industry, Pisum Foods are a leading exporter of ​all kinds of​
            Indian spices​, pulses, grains, Fruits, Vegetables, and many more,
            to a number of destinations around the globe. ​With several
            partnerships with buyers across multiple countries, we have grown to
            be among the go-to companies for food export from India.
          </div>
        </div>
      </div>

      {/* <div className="flex lg:flex-row flex-col text-left gap-6 m-8 ">
        <div>
          <AboutCard data={data[0]} />
        </div>
        <div>
          <AboutCard data={data[1]} />
        </div>
      </div> */}
      <div className="bg-[#B2B377] rounded-[5rem]">
        <div className="flex flex-col  py-6  justify-center items-center">
          <div>
            <img
              className="w-[6rem]"
              alt="Values"
              src="https://pisumfoods.com/img/icon-img/vision.png"
            ></img>
          </div>
          <div className="text-black text-5xl font-bold">Values</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 px-16 py-6  justify-center items-center align-middle">
          <div class=" ">
            <ValueCard ValData={ValData[0]} />
          </div>
          <div class=" ">
            <ValueCard ValData={ValData[1]} />
          </div>
          <div class=" ">
            <ValueCard ValData={ValData[2]} />
          </div>
          <div class=" ">
            <ValueCard ValData={ValData[3]} />
          </div>
          <div class=" ">
            <ValueCard ValData={ValData[4]} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:px-16 px-8 my-8 ">
        <div className="text-center text-[#B2B377] text-5xl font-bold">
          Who We Are?
        </div>
        <div className="text-slate-800 text-xl lg:text-left sm:text-center md:text-center ">
          We are a group of young and enthusiastic individuals who have come
          together for a single goal of being a global leader in food trading.
          We believe that India is known for our spices and food export is key
          to our country’s growth. Prioritizing in exporting Indian spices and
          other food products, we are also analysts and researchers who possess
          an up to date global food market database to help you.
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:px-16 px-8 my-8 ">
        <div className="text-center text-[#B2B377] text-5xl font-bold">
          What We Do?
        </div>
        <div className="text-slate-800  text-xl lg:text-left sm:text-center md:text-center ">
          We provide customers with the service of spices export from India. But
          we also understand the demand for Indian food, which is why we also
          offer all kinds of food export from India. From helping you find the
          right buyers to packaging your food and sending it off, our complete
          services will ensure that you face absolutely no difficulties. Be it
          Europe, middle-east, the Americas, or wherever you want the food to be
          exported, we make sure that the job is done.
        </div>
      </div>
    </div>
  );
};

export default About;
