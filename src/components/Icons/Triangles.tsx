import { useTheme } from "@emotion/react";
import * as React from "react";

const SvgComponent = () => {
  const theme = useTheme();
  return (
    <svg
      viewBox="0 0 404 404"
      width="100%"
      height={404}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m340.667 161.313-228.75 140.175-3.594-273.69 232.344 133.515Z"
        fill={theme.primary.main}
      />
      <path
        d="m167.169 107.536 227.872 130.946-224.347 137.476-3.525-268.422Z"
        stroke={theme.primary.dark}
        strokeWidth={3}
      />
      <path
        d="m81.643 91.83 226.219 133.938-226.04 134.51-.18-268.447Z"
        stroke={theme.isDark ? theme.white : theme.black}
        strokeWidth={3}
      />
    </svg>
  );
};

export default SvgComponent;
