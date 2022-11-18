import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnity = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#110B09"
      d="m82.48 63.578 22.418-38.402 10.832 38.402-10.832 38.398zm-10.926 6.238 22.422 38.402-39.047-9.922-28.211-28.48zM93.969 18.93 71.555 57.34H26.719L54.93 28.855zm32 31.582L112.293.031 61.25 13.559l-7.555 13.18-15.336-.109L1 63.582l37.359 36.949h.004l15.324-.113 7.57 13.176 51.035 13.527 13.676-50.473-7.762-13.07zm0 0"
    />
  </svg>
);
export default SvgUnity;