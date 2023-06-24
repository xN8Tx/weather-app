import React from "react";

import style from "./style.module.css";

export default function MyButton({ onClick, children }) {
  return (
    <button className={style.MyButton} onClick={onClick}>
      {children}
    </button>
  );
}
