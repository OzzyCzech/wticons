import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGitter = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M96.8 25.6H107v51.2H96.8zm-25.6 0h10.2V128H71.2zm-25.6 0h10.2V128H45.6zM20 0h10.2v76.8H20z" />
  </svg>
);
export default SvgGitter;
