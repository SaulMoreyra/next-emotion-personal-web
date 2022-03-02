import * as React from "react";

const SvgComponent = ({ color = "#000" }) => (
  <svg width={16} height={23} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 1a1 1 0 0 0-2 0h2ZM7.293 21.79a1 1 0 0 0 1.414 0l6.364-6.363a1 1 0 0 0-1.414-1.415L8 19.67l-5.657-5.657A1 1 0 1 0 .93 15.427l6.364 6.363ZM7 1v20.083h2V1H7Z"
      fill={color}
    />
  </svg>
);

export default SvgComponent;
