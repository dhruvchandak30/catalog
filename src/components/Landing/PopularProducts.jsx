import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
// import jug from "./jug.jpeg";
import jug from '../Assets/Plate_1.png';
import "../Navbar/Navbar.css";

const PopularProducts = () => {
  const firstFourCategories = Object.entries(data).slice(0, 4);

  return (
    <div className="flex flex-col ">
      <div className="text-4xl font-bold text-slate-700 my-6">
        Our Popular Products
      </div>

      <div className="flex lg:flex-row flex-col  justify-evenly gap-2">
        {firstFourCategories.map(([category, items]) => (
          <div data-aos="fade-down" data-aos-offset="200" data-aos-delay="500">
            <Link
              to={`/category/${category}`}
              key={category}
              className="hover:no-underline"
            >
              <div className="flex flex-col items-center border-2 cursor-pointer p-8  item-container">
                <div className="flex flex-col">
                  <img
                    alt={category}
                    src={jug}
                    className=" w-[10rem] h-[10rem] "
                  />
                </div>
                <div className="hover-underline-animation text-[#B2B377] text-2xl font-semibold">
                  {category}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
