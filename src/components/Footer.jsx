// import { Facebook, Instagram } from "@mui/icons-material";
import React, { useEffect } from "react";
import "./Navbar/Navbar.css";
import { FaInternetExplorer } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:text-left justify-around lg:px-10 lg:py-20 py-10 gap-8 text-black bg-[#B2B377]">
      <div className="lg:w-1/4 flex flex-col gap-2">
        <div className="text-3xl">Nirguna Exports</div>
        <div className="text-xl">Owned By</div>
        <div className="text-l">
          Karshini Artysun Private Limited Plot no. 11, Industrial Area phase 2,
          Panchkula Haryana-134113 GSTIN: 06AAKCK0953B1ZU
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-2xl font-semibold ">Know More</div>
        <div className="hover-underline-animation1">About Nirguna</div>
        <div className="hover-underline-animation1">Privacy Policy</div>
        <div className="hover-underline-animation1">Terms & Conditions</div>
        <div className="hover-underline-animation1">Reviews</div>
        <div className="hover-underline-animation1">Contact Us</div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-2xl font-semibold">Help</div>
        <div className="hover-underline-animation1">Brass Care</div>
        <div className="hover-underline-animation1">Kansa Care</div>
        <div className="hover-underline-animation1">Copper Care</div>
        <div className="hover-underline-animation1">Shipping</div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-2xl font-semibold">Have Any Queries?</div>
        <div>
          Be the first to hear about our latest Promotions, new products
        </div>
        <div className="hover-underline-animation1">Ask Us</div>
        <div className="flex flex-row gap-3 items-center justify-center ">
          {/* <Instagram /> */}
          {/* <Facebook /> */}
          <FaInternetExplorer />
        </div>
      </div>
    </div>
  );
};

export default Footer;
