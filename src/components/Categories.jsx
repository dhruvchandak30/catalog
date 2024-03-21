import React from "react";
import data from "./data.json";
import ProductsPage from "./Products/ProductsPage";

const Categories = () => {
  return (
    <div>
      {Object.entries(data).map(([category, items]) => (
        <div key={category} className="border-2 my-4 flex flex-col">
          <h2 className="text-[#B2B377] text-3xl font-bold">{category}</h2>
          <div className="">
            <ProductsPage category={category} key={category} items={items} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
