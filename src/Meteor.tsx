import * as React from 'react';
import { SVGProps } from 'react';
const SvgMeteor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      d="M.439.438 219.3 232.266s7.457 5.259 13.158-.877c5.702-6.135 1.316-12.27 1.316-12.27L.439.438ZM69.738 22.35l166.668 179.677s7.456 5.259 13.158-.876c5.702-6.135 1.316-12.271 1.316-12.271L69.738 22.35ZM21.053 69.242l166.668 179.677s7.456 5.259 13.158-.877c5.702-6.135 1.316-12.27 1.316-12.27L21.053 69.242Zm107.268-28.048 116.441 125.53s5.209 3.674 9.193-.612c3.983-4.287.919-8.573.919-8.573L128.321 41.194Zm-91.229 82.389 116.441 125.53s5.209 3.674 9.193-.613c3.983-4.286.919-8.572.919-8.572L37.092 123.583ZM188.16 68.365l52.775 57.067s2.577 1.722 4.547-.287c1.971-2.008.455-4.017.455-4.017L188.16 68.365ZM66.229 181.43l52.775 57.067s2.577 1.722 4.547-.286c1.971-2.009.455-4.017.455-4.017L66.229 181.43Z"
      style={{
        fill: '#df4f4f',
        fillRule: 'nonzero',
      }}
      transform="translate(11.918 21.636) scale(3.90021)"
    />
  </svg>
);
export default SvgMeteor;
