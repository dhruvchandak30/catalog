import React from "react";
import "./Image.css";

const ImageComp = ({ link, text }) => {
  const handleClick = () => {
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      background: RGBA(0, 0, 0, 0.5) url(${link}) no-repeat center;
      background-size: contain;
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 10000;
      top: 0;
      left: 0;
      cursor: zoom-out;
    `;
    overlay.onclick = () => {
      document.body.removeChild(overlay);
    };
    document.body.appendChild(overlay);
  };

  return (
    <div className="container">
      <img
        data-enlargable
        width="100"
        src={link}
        alt={text}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageComp;
