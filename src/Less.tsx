import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLess = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M19.417 35.134c0-1.513-.973-3.135-3.783-3.243V28.11c2.81-.108 3.783-1.73 3.783-3.243 0-2.702-.432-4.43-.432-7.565 0-4.755 1.729-6.269 5.62-6.269H34.98v3.459h-8.43c-1.837 0-2.378.648-2.378 3.026 0 2.378.217 4.54.217 7.133 0 3.35-1.081 4.648-3.243 5.188v.216c2.162.54 3.243 1.837 3.243 5.188 0 2.702-.217 4.755-.217 7.133s.54 3.134 2.378 3.134h.865v3.35h-2.81c-3.891 0-5.62-1.513-5.62-6.268 0-3.134.432-4.755.432-7.457v-.001Zm9.187-23.777h6.484v24.317c0 1.405.649 1.837 1.19 1.837.215 0 .431 0 .756-.108l.756 4.756c-.756.324-1.837.54-3.242.54-4.431 0-5.944-2.918-5.944-7.35V11.357Zm18.265 8.43c6.16 0 9.294 4.539 9.294 10.483 0 1.189-.108 2.162-.216 2.702H42.654c.54 3.35 2.81 4.756 5.728 4.756 1.62 0 3.134-.433 4.755-1.405l2.162 3.89c-2.27 1.513-5.188 2.486-7.782 2.486-6.268 0-11.024-4.215-11.024-11.456-.108-7.025 5.08-11.456 10.376-11.456Zm3.782 9.186c0-2.486-1.08-4.323-3.674-4.323-2.054 0-3.783 1.405-4.215 4.323h7.889Zm9.187 6.701c1.945 1.513 3.783 2.27 5.62 2.27 1.945 0 2.81-.757 2.81-1.838 0-1.405-2.162-2.161-4.431-3.026-2.594-.972-5.728-2.81-5.728-6.376 0-4 3.35-6.81 8.322-6.81 3.35 0 5.836 1.406 7.673 2.81l-2.918 3.892c-1.621-1.19-3.026-1.838-4.647-1.838-1.621 0-2.486.649-2.486 1.73 0 1.404 2.053 1.945 4.323 2.81 2.81.972 5.944 2.593 5.944 6.592 0 4-3.134 7.025-8.97 7.025-2.81 0-6.16-1.189-8.322-3.026l2.81-4.215Zm17.616 0c1.946 1.513 3.783 2.27 5.62 2.27 1.946 0 2.81-.757 2.81-1.838 0-1.405-2.161-2.161-4.43-3.026-2.595-.972-5.729-2.81-5.729-6.376 0-4 3.35-6.81 8.322-6.81 3.35 0 5.836 1.406 7.674 2.81l-2.918 3.892c-1.622-1.19-3.027-1.838-4.648-1.838-1.62 0-2.486.649-2.486 1.73 0 1.404 2.054 1.945 4.215 2.81 2.81.972 5.945 2.593 5.945 6.592 0 4-3.135 7.025-8.97 7.025-2.81 0-6.161-1.189-8.323-3.026l2.918-4.215Zm15.996 9.727c1.837 0 2.378-.648 2.378-3.134 0-2.378-.217-4.54-.217-7.133 0-3.35 1.081-4.648 3.243-5.188v-.216c-2.162-.54-3.243-1.838-3.243-5.188 0-2.594.217-4.863.217-7.133 0-2.378-.433-3.026-2.378-3.026h-.865v-3.35h2.81c3.891 0 5.62 1.513 5.62 6.268 0 3.026-.432 4.755-.432 7.565 0 1.513.973 3.135 3.783 3.243v3.782c-2.81.108-3.783 1.73-3.783 3.243 0 2.81.432 4.43.432 7.565 0 4.755-1.729 6.269-5.62 6.269h-2.81v-3.459l.865-.108Z"
      style={{
        fill: '#214674',
        fillRule: 'nonzero',
      }}
      transform="translate(-144.576 183.706) scale(10.9429)"
    />
  </svg>
);
export default SvgLess;
