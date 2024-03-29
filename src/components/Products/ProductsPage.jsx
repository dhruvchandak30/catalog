import React from "react";
import { useNavigate } from "react-router-dom";
import ItemsPage from "./ItemPage";

const ProductsPage = ({ items, category }) => {
  const navigate = useNavigate();
  const firstItemsCount = window.innerWidth < 768 ? 2 : 5; // Change the count based on screen width
  const firstItems = items.slice(0, firstItemsCount);

  const redirectPageHandler = () => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="flex lg:flex-row flex-col ">
      <div className="flex flex-row w-full my-6">
        {firstItems.map((item, index) => (
          <div key={item.id} className=" m-2 p-2 w-[15rem]">
            <ItemsPage data={item} />
          </div>
        ))}
      </div>
      <div
        onClick={redirectPageHandler}
        className="text-[#B2B377] border-2 border-black flex font-bold cursor-pointer items-center justify-center mt-6 px-2 rounded-xl"
      >
        See More
      </div>
    </div>
  );
};

export default ProductsPage;
