import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import ItemsPage from "./ItemPage";

const IndividualProductPage = () => {
  const { category } = useParams();
  // console.log(category);

  const categoryItems = data[category] || [];

  return (
    <div className="text-black ">
      <div className="text-red-700 text-5xl font-bold my-6">{category}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryItems.map((item) => (
          <div key={item.id} className="m-2 ">
            <ItemsPage data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualProductPage;
