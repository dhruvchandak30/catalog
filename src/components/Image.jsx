import React, { useState } from "react";
// import gsap from "gsap";
import "./Image.css";

import { ImageGroup, Image } from "react-fullscreen-image";

const ImageComp = ({ link, text }) => {
  return (
    <div className="container">
      <ImageGroup>
        <ul className="images">
          <li>
            <Image src={link} alt={text} />
          </li>
        </ul>
      </ImageGroup>
    </div>
  );
};

export default ImageComp;
