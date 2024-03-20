import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import ItemsPage from "../Products/ItemPage";

const IndivElementPage = () => {
  const { element } = useParams();

  const Items = Object.values(data).flatMap((items) =>
    items.filter((item) => item.element === element)
  );

  //   const firstItemsCount = window.innerWidth < 768 ? 2 : 5; // Change the count based on screen width
  //   const firstItems = Items.slice(0, firstItemsCount);
  return (
    <div>
      <div className="text-6xl text-red-500 font-bold my-8">{element}</div>
      <div className="text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Items.map((item) => (
          <div key={item.id}>
            <ItemsPage data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndivElementPage;
