import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHandlebars = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14.59 62.67a7.14 7.14 0 0 0 2.31-3.48c.46-2 .36-3.94-2.31-5.3C7.82 50.47 3.45 56.57 2.77 58s-1.74 3.68-1 8.84 3.19 9.9 11 11.73a32.89 32.89 0 0 0 22-2.57c6.84-3.26 19.7-9 22.94-9.58a28.15 28.15 0 0 1 6.49-.81v-7.85a18 18 0 0 0-17.38-9.15C34.43 49.59 29.51 56 26.49 58.7s-8.61 9.17-12.37 8-4.81-5.7-3.48-7.14 2.37-1.18 3.18 0a6.24 6.24 0 0 1 .77 3.11z" />
    <path d="M113.41 62.67a7.14 7.14 0 0 1-2.31-3.48c-.46-2-.36-3.94 2.31-5.3 6.76-3.43 11.13 2.67 11.81 4.11s1.74 3.68 1 8.84-3.19 9.9-11 11.73A32.89 32.89 0 0 1 93.23 76c-6.84-3.26-19.7-9-22.94-9.58a28.15 28.15 0 0 0-6.49-.81v-7.85a18 18 0 0 1 17.38-9.15c12.39 1 17.32 7.38 20.34 10.08s8.61 9.17 12.37 8 4.81-5.76 3.48-7.19-2.37-1.18-3.18 0a6.24 6.24 0 0 0-.78 3.17z" />
  </svg>
);
export default SvgHandlebars;
