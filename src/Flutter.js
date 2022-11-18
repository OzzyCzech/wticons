import * as React from "react";
import Svg, { Path, LinearGradient, Stop } from "react-native-svg";
const SvgFlutter = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <Path
      fill="#3FB6D3"
      d="M12.3 64.2 76.3 0h39.4L32.1 83.6zm64 63.8h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"
    />
    <Path fill="#27AACD" d="m81.6 93.9-20-20-19.4 19.6 19.4 19.6z" />
    <Path fill="#19599A" d="M115.7 128 81.6 93.9l-20 19.2L76.3 128z" />
    <LinearGradient
      id="flutter_svg__a"
      x1={59.365}
      x2={86.825}
      y1={116.36}
      y2={99.399}
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0} stopColor="#1b4e94" />
      <Stop offset={0.63} stopColor="#1a5497" />
      <Stop offset={1} stopColor="#195a9b" />
    </LinearGradient>
    <Path fill="url(#flutter_svg__a)" d="m61.6 113.1 30.8-8.4-10.8-10.8z" />
  </Svg>
);
export default SvgFlutter;
