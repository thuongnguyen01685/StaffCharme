import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export default function SvgNotification() {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15.025 3.63751C10.8875 3.63751 7.525 7.00001 7.525 11.1375V14.75C7.525 15.5125 7.2 16.675 6.8125 17.325L5.375 19.7125C4.4875 21.1875 5.1 22.825 6.725 23.375C12.1125 25.175 17.925 25.175 23.3125 23.375C24.825 22.875 25.4875 21.0875 24.6625 19.7125L23.225 17.325C22.85 16.675 22.525 15.5125 22.525 14.75V11.1375C22.525 7.01251 19.15 3.63751 15.025 3.63751Z"
        stroke="#555555"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M17.3375 3.99999C16.95 3.88749 16.55 3.79999 16.1375 3.74999C14.9375 3.59999 13.7875 3.68749 12.7125 3.99999C13.075 3.07499 13.975 2.42499 15.025 2.42499C16.075 2.42499 16.975 3.07499 17.3375 3.99999Z"
        stroke="#555555"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.775 23.825C18.775 25.8875 17.0875 27.575 15.025 27.575C14 27.575 13.05 27.15 12.375 26.475C11.7 25.8 11.275 24.85 11.275 23.825"
        stroke="#555555"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}
