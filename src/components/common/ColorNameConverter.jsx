import React from "react";
import { GetColorName } from "hex-color-to-color-name";

const ColorNameConverter = ({ hexCode }) => {
  const colorName = GetColorName(hexCode);

  return <p>{colorName}</p>;
};

export default ColorNameConverter;
