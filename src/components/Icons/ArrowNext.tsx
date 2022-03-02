import * as React from "react";

const SvgComponent = ({ color = "#000" }) => (
  <svg width={27} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill={color}
      d="M1 7a1 1 0 0 0 0 2V7Zm25.707 1.707a1 1 0 0 0 0-1.414L20.343.929a1 1 0 1 0-1.414 1.414L24.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM1 9h25V7H1v2Z"
    />
  </svg>
);

export default SvgComponent;
