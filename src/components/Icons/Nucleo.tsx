import * as React from "react";

const SvgComponent = ({ color = "#D3FF52" }) => (
  <svg width={164} height={164} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx={82} cy={82} r={82} fill={color} />
  </svg>
);

export default SvgComponent;
