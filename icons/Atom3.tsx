import * as React from "react";

const SvgComponent = ({ color = "#000" }) => (
  <svg width={410} height={410} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx={205} cy={205} r={203.5} stroke={color} strokeWidth={2} />
    <circle cx={61} cy={62} r={12} fill={color} />
    <circle cx={349} cy={62} r={12} fill={color} />
    <circle cx={61} cy={348} r={12} fill={color} />
    <circle cx={349} cy={348} r={12} fill={color} />
  </svg>
);

export default SvgComponent;
