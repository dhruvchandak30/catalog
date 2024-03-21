import React from "react";
import ImageComp from "./Image";
import iamge from "../Assets/3.PNG";
import AOS from "aos";

const ItemsPage = ({ data }) => {
  AOS.init();
  // console.log(data);
  return (
    <div
      className=" flex flex-col items-center justify-center"
      data-aos="zoom-in-down"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      <p className="text-xl text-[#B2B377] font-semibold">{data.title}</p>
      <p className=" text-xl"> {data.element}</p>
      <div>
        <ImageComp text={data.title} link={iamge} />
      </div>
    </div>
  );
};

export default ItemsPage;
