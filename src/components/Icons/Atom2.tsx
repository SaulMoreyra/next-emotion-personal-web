import * as React from "react";

const SvgComponent = ({ color = "#D3FF52" }) => (
  <svg width={328} height={328} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx={164} cy={164} r={162.5} stroke={color} strokeWidth={2} />
    <circle cx={52} cy={45} r={12} fill={color} />
    <circle cx={279} cy={279} r={12} fill={color} />
  </svg>
);

export default SvgComponent;
