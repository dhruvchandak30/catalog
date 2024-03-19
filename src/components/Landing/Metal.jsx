import React from "react";
import ItemsPage from "../ItemPage";
import data from "../data.json";
import { useNavigate } from "react-router";

const BrassItems = ({ element }) => {
  // Filter items with element "Brass"
  const Items = Object.values(data).flatMap((items) =>
    items.filter((item) => item.element === element)
  );
  const navigate = useNavigate();

  const firstItemsCount = window.innerWidth < 768 ? 2 : 5; // Change the count based on screen width
  const firstItems = Items.slice(0, firstItemsCount);

  const redirectPageHandler = () => {
    navigate(`/element/${element}`);
  };

  return (
    <div className="flex flex-row">
      {firstItems.map((item, index) => (
        <div key={item.id} className="w-full sm:w-1/2 md:w-1/5 px-2 mb-4">
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

export default BrassItems;
