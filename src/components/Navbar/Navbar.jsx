import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo1.png";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";

const Navbar = () => {
  const Categories = [
    "Dinner Set",
    "Thali Set",
    "Plate",
    "Tray",
    "Lemon Set",
    "Jug",
    "Glass",
    "Bowl",
    "Tea Pot",
    "Mug",
    "Cup-Plate",
    "Lota",
    "Kalash",
    "Pan",
    "Bonton",
    "Kadai",
    "Donga",
    "Bottle",
    "Tanki",
    "Dabba",
    "Miscellaneous",
    "Cutlery",
  ];
  const Element = ["Brass", "Copper", "SteelCopper", "Bronze"];
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
  // const CategoryNavigateHandler = () => {
  //   document.getElementById("myDropdown").classList.toggle("show");

  //   window.onclick = function (event) {
  //     if (!event.target.matches(".dropbtn")) {
  //       var dropdowns = document.getElementsByClassName("dropdown-content");
  //       var i;
  //       for (i = 0; i < dropdowns.length; i++) {
  //         var openDropdown = dropdowns[i];
  //         if (openDropdown.classList.contains("show")) {
  //           openDropdown.classList.remove("show");
  //         }
  //       }
  //     }
  //   };
  // setIsChecked(false);
  // };

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="nav flex flex-row items-center align-middle lg:justify-around justify-between lg:p-0 p-4">
      <div className="flex lg:flex-row gap-2">
        <img
          src={logo}
          alt="Nirguna"
          className="lg:w-20 w-10 rounded-[15rem] bg-transparent"
        ></img>
        <label
          className="lg:text-white text-black font-bold hover:text-white lg:text-3xl text-xl flex pt-3 items-center justify-center cursor-pointer"
          onClick={HomeNavigateHandler}
        >
          Nirguna Exports
        </label>
      </div>
      <div></div>

      <div className="z-50">
        <Menu>
          <MenuButton as={Button}>SHOP</MenuButton>
          <MenuList className="flex flex-row gap-8 rounded-2xl bg-white p-8 text-left">
            <div className="flex lg:flex-row flex-col gap-8">
              <MenuGroup
                title="Nirguna"
                className="text-xl font-semibold font-sans mb-6"
              >
                <MenuItem
                  onClick={HomeNavigateHandler}
                  className="hover:font-semibold my-2"
                >
                  Home
                </MenuItem>
                <MenuItem
                  onClick={AboutNavigateHandler}
                  className="hover:font-semibold my-2"
                >
                  About Us{" "}
                </MenuItem>
                <MenuItem
                  onClick={ContactNavigateHandler}
                  className="hover:font-semibold my-2"
                >
                  Contact Us{" "}
                </MenuItem>
              </MenuGroup>
              <MenuGroup
                title="Shop By Metals"
                className="text-xl font-semibold font-sans mb-6"
              >
                {Element.map((element, index) => (
                  <Link
                    to={`/element/${element}`}
                    className=" no-underline border-0 hover:text-black hover:no-underline hover:border-0"
                  >
                    <MenuItem className=" hover:font-semibold my-1">
                      {element}
                    </MenuItem>
                  </Link>
                ))}
              </MenuGroup>
            </div>
            <div>
              <MenuGroup
                title="Shop By Utility"
                className="text-xl font-semibold font-sans mb-6"
              >
                {Categories.map((category, index) => (
                  <Link
                    to={`/category/${category}`}
                    className="no-underline border-0 hover:text-black hover:no-underline hover:border-0"
                  >
                    <MenuItem className=" hover:font-semibold">
                      {category}
                    </MenuItem>
                  </Link>
                ))}
              </MenuGroup>
            </div>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
