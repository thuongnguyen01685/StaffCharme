import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export default function SvgProfile() {
  return (
    <Svg
      width={15}
      height={18}
      viewBox="0 0 13 16"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg">
      <Circle
        cx="6.71929"
        cy="4.85198"
        r="3.18535"
        stroke="#D1D1D1"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.66664 12.4676C1.66578 12.2437 1.71586 12.0225 1.81309 11.8207C2.1182 11.2105 2.97861 10.8871 3.69257 10.7407C4.20748 10.6308 4.7295 10.5574 5.25474 10.521C6.22718 10.4356 7.20525 10.4356 8.1777 10.521C8.70289 10.5578 9.22488 10.6312 9.73986 10.7407C10.4538 10.8871 11.3142 11.18 11.6193 11.8207C11.8149 12.2319 11.8149 12.7093 11.6193 13.1205C11.3142 13.7613 10.4538 14.0542 9.73986 14.1945C9.22556 14.3089 8.70335 14.3844 8.1777 14.4203C7.3862 14.4874 6.59102 14.4996 5.79783 14.4569C5.61477 14.4569 5.4378 14.4569 5.25474 14.4203C4.73105 14.3849 4.21084 14.3094 3.69867 14.1945C2.97861 14.0542 2.1243 13.7613 1.81309 13.1205C1.71636 12.9165 1.66633 12.6934 1.66664 12.4676Z"
        stroke="#D1D1D1"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
