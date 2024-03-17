import React from "react";
import { useNavigate } from "react-router-dom";
import ItemsPage from "../ItemPage";

const ProductsPage = ({ items, category }) => {
  const navigate = useNavigate();
  const firstFiveItems = items.slice(0, 5);

  const redirectPageHandler = () => {
    // Redirect to the individual product page for the specific category
    navigate(`/category/${category}`);
  };

  return (
    <div className="flex flex-row overflow-scroll">
      {firstFiveItems.map((item) => (
        <div key={item.id} className=" ">
          <ItemsPage data={item} />
        </div>
      ))}6
      <div
        onClick={redirectPageHandler}
        className="text-red-700 border-2 border-black flex font-bold cursor-pointer items-center justify-center"
      >
        See More
      </div>
    </div>
  );
};

export default ProductsPage;
