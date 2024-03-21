import React from "react";
import ItemsPage from "../Products/ItemPage";
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
    <div className="flex lg:flex-row flex-col ">
      <div className="flex flex-row w-full justify-evenly">
        {firstItems.map((item, index) => (
          <div key={item.id} className="">
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

export default BrassItems;
