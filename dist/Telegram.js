var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
var SvgTelegram = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", style: {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 2,
    }, viewBox: "0 0 256 256" }, props),
    React.createElement("path", { d: "M128 0C94.06 0 61.48 13.494 37.5 37.49A128.083 128.083 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51 0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z", style: {
            fill: 'url(#telegram_svg__a)',
            fillRule: 'nonzero',
        }, transform: "translate(1.738 1.738) scale(.98642)" }),
    React.createElement("path", { d: "M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152 35.56-14.786 42.94-17.354 47.76-17.441 1.06-.017 3.42.245 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.467.16.996.38 3.266.2 5.038-1.92 20.24-10.26 69.356-14.5 92.026-1.78 9.592-5.32 12.808-8.74 13.122-7.44.684-13.08-4.912-20.28-9.63-11.26-7.386-17.62-11.982-28.56-19.188-12.64-8.328-4.44-12.906 2.76-20.386 1.88-1.958 34.64-31.748 35.26-34.45.08-.338.16-1.598-.6-2.262-.74-.666-1.84-.438-2.64-.258-1.14.256-19.12 12.152-54 35.686-5.1 3.508-9.72 5.218-13.88 5.128-4.56-.098-13.36-2.584-19.9-4.708-8-2.606-14.38-3.984-13.82-8.41.28-2.304 3.46-4.662 9.52-7.072Z", style: {
            fill: '#fff',
            fillRule: 'nonzero',
        }, transform: "translate(1.738 1.738) scale(.98642)" }),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "telegram_svg__a", x1: 0, x2: 1, y1: 0, y2: 0, gradientTransform: "matrix(0 256 -256 0 128 0)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: '#2aabee',
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: '#229ed9',
                    stopOpacity: 1,
                } }))))); };
export default SvgTelegram;
