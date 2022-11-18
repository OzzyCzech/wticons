import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJasmine = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="#8a4182">
      <path d="M68.49 52.7h-9.44l-2.55-3.28V23.7h14.38v25.72l-2.39 3.28zm-12.77 2.4-2.92 8.98-3.9 1.41-24.47-7.95 4.45-13.67 24.46 7.94 2.38 3.29zm-1.68 12.64 7.64 5.55.13 4.14L46.7 98.25 35.06 89.8l15.13-20.82 3.85-1.24zm11.72 5.59 7.65-5.55 3.98 1.16 15.12 20.81-11.63 8.45-15.12-20.81v-4.06zm9.08-9.1-2.92-8.99 2.33-3.43 24.46-7.94 4.45 13.67-24.47 7.95-3.85-1.26z" />
      <path d="M64 1.41A62.59 62.59 0 1 0 126.59 64 62.59 62.59 0 0 0 64 1.41zm-.34 111.5a49.5 49.5 0 1 1 49.5-49.5 49.5 49.5 0 0 1-49.5 49.51z" />
      <path d="M61.58 82.99h3.92v19.51h-3.92zm21.258-12.04 1.211-3.728 18.555 6.029-1.211 3.728zm-5.084-23.888-3.171-2.304L86.05 28.974l3.172 2.304zm-24.402-2.303-3.172 2.304L38.713 31.28l3.171-2.304zm-9.957 22.465 1.211 3.728-18.555 6.029-1.211-3.728z" />
    </g>
  </svg>
);
export default SvgJasmine;
