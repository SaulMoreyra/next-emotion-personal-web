import * as React from "react";

const SvgComponent = ({ color = "#000" }) => (
  <svg width={246} height={246} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx={123} cy={123} r={121.5} stroke={color} strokeWidth={2} />
    <circle cx={38} cy={209} r={12} fill={color} />
  </svg>
);

export default SvgComponent;
