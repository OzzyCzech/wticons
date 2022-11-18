import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGimp = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <radialGradient
      id="gimp_svg__a"
      cx={359.382}
      cy={134.83}
      r={50.57}
      gradientTransform="matrix(1 0 0 -.435 -297.375 140.218)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} />
      <stop offset={1} stopOpacity={0} />
    </radialGradient>
    <path
      fill="url(#gimp_svg__a)"
      d="M112.6 81.6c0 12.1-22.6 22-50.6 22s-50.6-9.8-50.6-22 22.6-22 50.6-22 50.6 9.8 50.6 22z"
    />
    <radialGradient
      id="gimp_svg__b"
      cx={201.749}
      cy={230.895}
      r={53.284}
      gradientTransform="matrix(1.773 0 0 -1.297 -313.84 354.268)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#857C63" />
      <stop offset={1} stopColor="#221F19" />
    </radialGradient>
    <path
      fill="url(#gimp_svg__b)"
      stroke="#2E3436"
      strokeMiterlimit={10}
      d="M26.7 27.6s8 16.4 26.6 16c39.1-1 45.9-21.4 46.9-24.3 1-2.9 2.5-2.5 2.8.2 12.7 115.6-88.4 66-92 46.3C31.1 60 26.2 48.7 26.2 48.7l.5-21.1z"
    />
    <linearGradient
      id="gimp_svg__c"
      x1={378.844}
      x2={347.984}
      y1={204.625}
      y2={198.502}
      gradientTransform="matrix(1 0 0 -1 -301.337 279.346)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} />
      <stop offset={1} stopOpacity={0} />
    </linearGradient>
    <path
      fill="url(#gimp_svg__c)"
      d="M41.5 76.4c18.7 3.7 28.2.3 33.7-4-1.5-1.9-4-4-4-4s6.5 1.8 8.8 4.8c2.3 3 .9 4.8.3 8.6-1.3-3.3-3.8-4.6-4.2-5.9-4.9 6.9-17.4 6.6-34.6.5z"
    />
    <linearGradient
      id="gimp_svg__d"
      x1={348.046}
      x2={413.386}
      y1={240.776}
      y2={166.604}
      gradientTransform="matrix(1 0 0 -1 -297.5 279)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#fff" />
      <stop offset={1} stopColor="#fff" stopOpacity={0} />
    </linearGradient>
    <path
      fill="none"
      stroke="url(#gimp_svg__d)"
      strokeMiterlimit={10}
      d="M100.4 25.9c-1.6 2.6-3.9 5.6-7.4 8.6-7.3 6-19.5 11.5-39.6 12-11.7.3-19.3-5.4-23.9-10.4l-.3 12.4c.4 1.2 1.2 3.9-.2 7.5-1.4 4-6 8-13.8 11.1.7 1.4 1.4 2.9 3.5 4.9 2.8 2.8 6.8 5.8 11.5 8.5 9.4 5.4 21.6 9.7 33 9.9 11.4.2 21.8-3.4 28.9-13.9 6.5-9.6 10.2-25.8 8.3-50.6z"
      opacity={0.185}
    />
    <radialGradient
      id="gimp_svg__e"
      cx={259.173}
      cy={242.809}
      r={9.741}
      gradientTransform="matrix(1.685 0 0 -1.685 -400.899 453.504)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#fff" />
      <stop offset={1} stopColor="#B9B9B0" />
    </radialGradient>
    <path
      fill="url(#gimp_svg__e)"
      stroke="#888A85"
      strokeMiterlimit={10}
      strokeWidth={0.783}
      d="M47 52.4c0 6.2-5 11.3-11.3 11.3s-11.3-5-11.3-11.3 5-11.3 11.3-11.3S47 46.1 47 52.4z"
    />
    <radialGradient
      id="gimp_svg__f"
      cx={274.252}
      cy={84.308}
      r={13.387}
      gradientTransform="matrix(.797 -.46 -.537 -.931 -163.086 262.495)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#5B676B" />
      <stop offset={1} stopColor="#141718" />
    </radialGradient>
    <path
      fill="url(#gimp_svg__f)"
      stroke="#000"
      strokeMiterlimit={10}
      d="M24.6 56.6c5.5 7.6 5.5 16.8.2 20.7-5.4 3.9-14.2.9-19.6-6.7C-.3 63-.3 53.8 5 49.9s14.1-.9 19.6 6.7z"
    />
    <path
      fill="#2E3436"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.174}
      d="M43.8 54c0 3-2.4 5.4-5.4 5.4-3 0-5.4-2.4-5.4-5.4 0-3 2.4-5.4 5.4-5.4 3 0 5.4 2.4 5.4 5.4z"
    />
    <linearGradient
      id="gimp_svg__g"
      x1={230.297}
      x2={229.46}
      y1={47.32}
      y2={25.884}
      gradientTransform="scale(1 -1) rotate(37 273.194 -336.595)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#fff" />
      <stop offset={1} stopColor="#fff" stopOpacity={0} />
    </linearGradient>
    <path
      fill="none"
      stroke="url(#gimp_svg__g)"
      strokeMiterlimit={10}
      d="M5.9 52.4C4.2 53.7 3.2 56 3.3 59c.1 3 1.3 6.8 3.8 10.1s5.7 5.5 8.6 6.4c2.9.9 5.3.7 7.1-.7 1.8-1.3 2.7-3.7 2.6-6.7s-1.2-6.7-3.7-10-5.6-5.4-8.6-6.4c-2.9-.9-5.4-.6-7.2.7z"
      opacity={0.281}
    />
    <path
      fill="#fff"
      d="M14.1 57.5c0 3.2-2.2 5.9-4.9 5.9s-4.9-2.6-4.9-5.9c0-3.2 2.2-5.9 4.9-5.9s4.9 2.7 4.9 5.9zm25.9-6c0 2.1-1.7 3.8-3.8 3.8-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8 2.2.1 3.8 1.8 3.8 3.8z"
    />
    <radialGradient
      id="gimp_svg__h"
      cx={238.588}
      cy={244.872}
      r={9.741}
      gradientTransform="matrix(1.978 0 0 -1.978 -412.858 528.573)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#fff" />
      <stop offset={1} stopColor="#B9B9B0" />
    </radialGradient>
    <path
      fill="url(#gimp_svg__h)"
      stroke="#888A85"
      strokeMiterlimit={10}
      strokeWidth={0.667}
      d="M72.2 53.6c0 7.3-5.9 13.2-13.2 13.2s-13.2-5.9-13.2-13.2S51.7 40.4 59 40.4s13.2 5.9 13.2 13.2z"
    />
    <path
      fill="#2E3436"
      stroke="#000"
      strokeMiterlimit={10}
      d="M68.5 55.5c0 3.5-2.9 6.4-6.4 6.4-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4c3.5.1 6.4 2.9 6.4 6.4z"
    />
    <path
      fill="#fff"
      d="M64.1 52.6c0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4c0-2.4 2-4.4 4.4-4.4 2.4 0 4.4 2 4.4 4.4z"
    />
    <g transform="matrix(-.115 -.39 .39 -.115 24.715 29.689)">
      <linearGradient
        id="gimp_svg__i"
        x1={1581.422}
        x2={1555.752}
        y1={-398.274}
        y2={-420.6}
        gradientTransform="matrix(-.115 .39 .39 .115 175.179 -456.047)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#6E3D09" />
        <stop offset={0.242} stopColor="#EA8113" />
        <stop offset={0.621} stopColor="#5C3307" />
        <stop offset={1} stopColor="#E07C12" />
      </linearGradient>
      <path
        fill="url(#gimp_svg__i)"
        stroke="#673907"
        strokeLinecap="round"
        strokeWidth={2.461}
        d="m-201.5 132 10.3 9.6c23.1-17.7 47.4-55.7 47.4-55.7 5.5-6.2-.3-10.4-6-6.6 0 0-36 28-51.7 52.7z"
      />
      <linearGradient
        id="gimp_svg__j"
        x1={1691.417}
        x2={1701.71}
        y1={-496.243}
        y2={-486.718}
        gradientTransform="matrix(-.115 .39 .39 .115 178.077 -459.728)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#BDBDBD" />
        <stop offset={0.333} stopColor="#E2E2E2" />
        <stop offset={0.667} stopColor="#A3A3A3" />
        <stop offset={1} stopColor="#ddd" />
      </linearGradient>
      <path
        fill="url(#gimp_svg__j)"
        stroke="#888A85"
        strokeLinecap="round"
        strokeWidth={2.461}
        d="m-221.1 157.6 6.2 5.4 23.5-20.4.8-2h3c-1.2-4.3-8.2-12.1-13.3-12.1l.2 3-1.9 1.1-18.5 25z"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.461}
        d="m-202.7 145.3-12.1 14.6"
      />
      <radialGradient
        id="gimp_svg__k"
        cx={958.406}
        cy={-380.262}
        r={21.002}
        gradientTransform="matrix(-.181 .598 .613 .176 183.272 -348.089)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#696969" />
        <stop offset={1} />
      </radialGradient>
      <path
        fill="url(#gimp_svg__k)"
        d="M-262.4 185.2c28.9 0 50.9 3.4 55.1-17.6 3.4-17-20-25.1-31.5-10-11.2 14.6-23.6 27.6-23.6 27.6z"
      />
      <path
        fill="#fff"
        d="M-209.8 168.2c0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2 3.2-7.2 7.2-7.2 7.2 3.2 7.2 7.2z"
        opacity={0.528}
      />
      <path
        fill="#fff"
        d="M-191.2 141.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.2-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.6-.1 4.8 2.1 4.8 4.8z"
      />
      <linearGradient
        id="gimp_svg__l"
        x1={2046.356}
        x2={2031.16}
        y1={702.985}
        y2={715.537}
        gradientTransform="matrix(-.241 .249 .249 .241 95.193 -501.932)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <path
        fill="url(#gimp_svg__l)"
        d="M-243.6 180s10.3.3 16.9-3.9c2.3-1.5 4.2 1.8 1.4 3-6.1 2.6-18.3.9-18.3.9z"
        opacity={0.428}
      />
    </g>
    <linearGradient
      id="gimp_svg__m"
      x1={367.723}
      x2={362.641}
      y1={202.128}
      y2={200.904}
      gradientTransform="matrix(1 0 0 -1 -297.5 279)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} />
      <stop offset={1} stopOpacity={0} />
    </linearGradient>
    <path
      fill="url(#gimp_svg__m)"
      d="M61.7 81c4.1.4 7.9-.8 9.5-1.3.3-1.5 1.5-4.5 5.7-4.7l-1.5-2.6s-5.4 3.7-11.3 4.8L61.7 81z"
    />
  </svg>
);
export default SvgGimp;
