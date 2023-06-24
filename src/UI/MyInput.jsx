import React, { useEffect, useState } from "react";

import style from "./style.module.css";

export default function MyInput({ value, onChange, placeholder }) {
  const [inputWidth, setInputWidth] = useState(50);

  useEffect(() => {
    if (value <= 3) {
      setInputWidth(50);
    } else {
      setInputWidth((value.length + 1) * 11.7);
    }
  }, [value]);

  return (
    <input
      type="text"
      className={style.MyInput}
      value={value}
      style={{ width: `${inputWidth}px` }}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
