import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import jug from "./jug.jpeg";
import "../Navbar/Navbar.css";

const PopularProducts = () => {
  return (
    <div className="flex flex-col">
      <div className="text-4xl font-bold text-slate-700 my-6">
        Our Categories
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-4 gap-2">
        {Object.entries(data).map(([category, items]) => (
          <Link
            to={`/category/${category}`}
            key={category}
            className="hover:no-underline"
          >
            <div className="flex flex-col items-center border-2 cursor-pointer">
              <div className="w-max flex flex-col">
                <img alt={category} src={jug} className="w-32 h-32" />
              </div>
              <div className="hover-underline-animation text-red-500 text-2xl font-semibold">
                {category}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
