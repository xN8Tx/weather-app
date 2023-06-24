import React from "react";

import style from "./style.module.css";

export default function MyHeading({ children }) {
  return <h1 className={style.MyHeading}>{children}</h1>;
}
