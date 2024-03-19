import React from "react";
import Metal from "./Metal";

const Element = () => {
  return (
    <div className="my-8">
      <div className="text-5xl font-semibold ">
        Utensils Sorted According Material
      </div>
      <div className="flex flex-col gap-8 mx-4">
        <div>
          <div className="text-3xl font-bold text-red-500">Brass</div>
          <Metal element="Brass" />
        </div>
        <div>
          <div className="text-3xl font-bold text-red-500">Copper</div>
          <Metal element="Copper" />
        </div>
        <div>
          <div className="text-3xl font-bold text-red-500">SteelCopper</div>
          <Metal element="SteelCopper" />
        </div>
        <div>
          <div className="text-3xl font-bold text-red-500">Bronze</div>
          <Metal element="Bronze" />
        </div>
      </div>
    </div>
  );
};

export default Element;
