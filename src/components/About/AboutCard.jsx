import React from "react";

const AboutCard = ({ data }) => {
  return (
    <div className="flex flex-row lg:w-2/3 gap-6">
      <div>
        <img className="lg:w-[10rem] w-[10rem]" src={data.img} alt={data.title}></img>
      </div>
      <div className="flex flex-col">
        <div className="text-3xl font-semibold">{data.title}</div>
        <div className="text-xl text-slate-600">{data.desc}</div>
      </div>
    </div>
  );
};

export default AboutCard;
