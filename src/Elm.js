import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgElm = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <Path fill="#efa500" d="m64 60.74 25.65-25.65h-51.3L64 60.74z" />
    <Path
      fill="#8dd737"
      d="m7.91 4.65 25.83 25.84h56.17L64.07 4.65H7.91zm59.353 59.343 28.08-28.08 27.951 27.953-28.08 28.079z"
    />
    <Path fill="#60b5cc" d="M123.35 57.42V4.65H70.58l52.77 52.77z" />
    <Path fill="#34495e" d="M60.74 64 4.65 7.91V120.1L60.74 64z" />
    <Path fill="#efa500" d="m98.47 95.21 24.88 24.89V70.33L98.47 95.21z" />
    <Path fill="#60b5cc" d="M64 67.26 7.91 123.35h112.18L64 67.26z" />
  </Svg>
);
export default SvgElm;
