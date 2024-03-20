import React from "react";
import Metal from "./Metal";

const Element = () => {
  return (
    <div className="my-8">
      <div className="text-5xl font-semibold ">
        Utensils Sorted According Material
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <div className="text-4xl my-4 font-extrabold text-red-700">Brass</div>
          <Metal element="Brass" />
        </div>
        <div>
          <div className="text-4xl my-4 font-extrabold text-red-700">
            Copper
          </div>
          <Metal element="Copper" />
        </div>
        <div>
          <div className="text-4xl my-4 font-extrabold text-red-700">
            SteelCopper
          </div>
          <Metal element="SteelCopper" />
        </div>
        <div>
          <div className="text-4xl my-4 font-extrabold text-red-700">
            Bronze
          </div>
          <Metal element="Bronze" />
        </div>
      </div>
    </div>
  );
};

export default Element;
