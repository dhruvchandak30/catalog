import React from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const HomeNavigateHandler = () => {
    navigate("/");
  };
  const ContactNavigateHandler = () => {
    navigate("/contact");
  };
  const AboutNavigateHandler = () => {
    navigate("/about");
  };
  const CategoryNavigateHandler = () => {
    navigate("/categories");
  };
  return (
    <div>
      <nav>
        <label for="check" id="checkbtn" className="-mt-0">
          <FaBars />
        </label>
        <input type="checkbox" id="check"></input>
        <div className="NavbarUl flex lg:flex-row flex-col lg:justify-between items-center lg:mx-8 align-middle md:text-left">
          <label
            className="text-[#B01C1A] font-bold text-3xl flex pt-3 items-center justify-center cursor-pointer"
            onClick={HomeNavigateHandler}
          >
            Nirguna Exports
          </label>
          <ul className="text-[#B01C1A] flex text-2xl lg:flex-row flex-col items-center align-middle gap-4 py-2 font-semibold ">
            <div
              className="hover-underline-animation hover:text-red-700 cursor-pointer"
              onClick={HomeNavigateHandler}
            >
              Home
            </div>
            {/* <div
              className="hover-underline-animation hover:text-red-700 cursor-pointer"
              onClick={AboutNavigateHandler}
            >
              About
            </div> */}
            <div
              className="hover-underline-animation hover:text-red-700 cursor-pointer"
              onClick={CategoryNavigateHandler}
            >
              Categories
            </div>
            <div
              className="hover-underline-animation hover:text-red-700 cursor-pointer"
              onClick={ContactNavigateHandler}
            >
              Contact
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
