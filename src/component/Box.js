import React from "react";
import { useSelector } from "react-redux";
import GrandSonBox from "./GrandSonBox";

const Box = () => {
  let count = useSelector((state) => state.count);
  return (
    <h1>
      Amazing Redux {count}
      <GrandSonBox />
    </h1>
  );
};

export default Box;
