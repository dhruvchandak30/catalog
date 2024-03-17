import React from "react";
import data from "./data.json";
import ProductsPage from "./Products/ProductsPage";

const Categories = () => {
  return (
    <div>
      {Object.entries(data).map(([category, items]) => (
        <div key={category} className="border-2 my-4 ">
          <h2 className="text-red-700">{category}</h2>
          <div className="">
            <ProductsPage category={category} key={category} items={items} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
