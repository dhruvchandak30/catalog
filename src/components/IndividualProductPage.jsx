import React from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import ItemsPage from "./ItemPage";

const IndividualProductPage = () => {
  const { category } = useParams();
  // console.log(category);

  const categoryItems = data[category] || [];

  return (
    <div className="text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categoryItems.map((item) => (
        <div key={item.id}>
          <ItemsPage data={item} />
        </div>
      ))}
    </div>
  );
};

export default IndividualProductPage;
