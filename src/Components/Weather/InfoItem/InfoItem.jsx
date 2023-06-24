import React from "react";

import "./InfoItem.css";

export default function InfoItem({ src, text, char }) {
  return (
    <div className="info__item">
      <img src={src} alt="" />
      <p>
        <span>{text}</span>
        {char}
      </p>
    </div>
  );
}
