import React from "react";

const ValueCard = ({ ValData }) => {
  return (
    <div className="flex  flex-row  gap-2">
      <div>
        <img className="w-[5rem]" alt={ValData.title} src={ValData.img}></img>
      </div>
      <div className="text-left">
        <div className="text-black text-3xl">{ValData.title}</div>
        <div className="lg:w-[30rem] text-slate-900 text-xl ">
          {ValData.desc}
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
