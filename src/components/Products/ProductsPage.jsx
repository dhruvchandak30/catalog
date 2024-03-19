import React from "react";
import { useNavigate } from "react-router-dom";
import ItemsPage from "../ItemPage";

const ProductsPage = ({ items, category }) => {
  const navigate = useNavigate();
  const firstItemsCount = window.innerWidth < 768 ? 2 : 7; // Change the count based on screen width
  const firstItems = items.slice(0, firstItemsCount);

  const redirectPageHandler = () => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="flex flex-row">
      {firstItems.map((item) => (
        <div key={item.id} className=" ">
          <ItemsPage data={item} />
        </div>
      ))}

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
