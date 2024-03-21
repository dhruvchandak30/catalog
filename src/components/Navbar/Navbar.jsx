import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const HomeNavigateHandler = () => {
    navigate("/");
    setIsChecked(false);
  };
  const ContactNavigateHandler = () => {
    navigate("/contact");
    setIsChecked(false);
  };
  const AboutNavigateHandler = () => {
    navigate("/about");
    setIsChecked(false);
  };
  const CategoryNavigateHandler = () => {
    document.getElementById("myDropdown").classList.toggle("show");

    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
    setIsChecked(false);
  };

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-[#D2D180] ">
      <nav>
        <label htmlFor="check" id="checkbtn" className="-mt-0">
          <FaBars />
        </label>
        <input
          type="checkbox"
          id="check"
          checked={isChecked}
          onChange={handleInputChange}
        />
        <div className="NavbarUl flex lg:flex-row flex-col lg:justify-between items-center lg:mx-8 align-middle md:text-left">
          <label
            className="text-slate-800 font-bold hover:text-slate-950 text-3xl flex pt-3 items-center justify-center cursor-pointer"
            onClick={HomeNavigateHandler}
          >
            Nirguna Exports
          </label>
          <ul className="text-slate-800  flex text-2xl lg:flex-row flex-col items-center align-middle gap-4 py-2 font-semibold ">
            <div
              className="hover-underline-animation hover:text-slate-950 cursor-pointer"
              onClick={HomeNavigateHandler}
            >
              Home
            </div>
            <div
              className="hover-underline-animation hover:text-slate-950 cursor-pointer"
              onClick={AboutNavigateHandler}
            >
              About
            </div>
            <div
              className="dropbtn hover-underline-animation hover:text-slate-950 cursor-pointer"
              onClick={CategoryNavigateHandler}
            >
              Categories
            </div>
            <div id="myDropdown" className="dropdown-content">
              <Link to="/categories" className="hover-underline-animation hover:text-slate-950">
                Type
              </Link>
              <Link to="/metals" className="hover-underline-animation hover:text-slate-950">
                Metals
              </Link>
            </div>
            <div
              className="hover-underline-animation hover:text-slate-950 cursor-pointer"
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
