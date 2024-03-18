import React from "react";

const ValueCard = ({ ValData }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div>
        <img className="w-[10rem]" alt={ValData.title} src={ValData.img}></img>
      </div>
      <div className="text-white font-bold text-3xl">{ValData.title}</div>
      <div className="lg:w-[30rem] text-slate-300 text-xl px-8">
        {ValData.desc}
      </div>
    </div>
  );
};

export default ValueCard;
