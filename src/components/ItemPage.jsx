import React from "react";
import ImageComp from "./Image";
import iamge from "./Assets/3.PNG";

const ItemsPage = ({ data }) => {
  // console.log(data);
  return (
    <div className="">
      <p>{data.title}</p>
      <p>Material: {data.element}</p>
      <ImageComp text={data.title} link={iamge} />
    </div>
  );
};

export default ItemsPage;
