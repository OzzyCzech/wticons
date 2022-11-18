import * as React from 'react';
import { SVGProps } from 'react';
const SvgWindows = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 1642 1646"
    {...props}
  >
    <path
      d="M180.39 31.198C251.419 20.33 322.582 10.093 393.746.216c.045 62.37 0 124.695.045 187.064-71.118.271-142.237 1.353-213.401 1.579-.045-52.584-.045-105.122 0-157.661ZM0 56.363c53.485-8.253 107.197-15.378 160.908-22.098.045 51.727.045 103.408.09 155.135-53.666-.045-107.332.767-160.998.631V56.363Zm0 149.949c53.62-.181 107.242.676 160.863.586 0 51.862.135 103.724.045 155.586C107.332 354.547 53.666 347.602 0 340.341V206.312Zm180.074 2.074h213.672c.09 62.19 0 124.379 0 186.614-71.028-10.643-142.192-20.52-213.356-30.171-.09-52.132-.225-104.265-.316-156.443Z"
      style={{
        fill: '#2f76bc',
        fillRule: 'nonzero',
      }}
      transform="translate(25.308 24.512) scale(4.04035)"
    />
  </svg>
);
export default SvgWindows;
