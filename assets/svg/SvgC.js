//import liraries
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function SvgC() {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M5 9.16667C7.30119 9.16667 9.16667 7.30119 9.16667 5C9.16667 2.69881 7.30119 0.833333 5 0.833333C2.69881 0.833333 0.833333 2.69881 0.833333 5C0.833333 7.30119 2.69881 9.16667 5 9.16667Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.66667 3.67042C6.47958 3.28917 5.91813 2.62229 4.79521 2.7175C3.67229 2.81292 2.83 3.86125 2.92375 5.19521C3.0175 6.52937 4.04667 7.29167 4.98229 7.29167C6.10521 7.29167 6.66667 6.37687 6.66667 6.37687"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
