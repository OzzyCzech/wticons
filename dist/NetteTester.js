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
var SvgNetteTester = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", style: {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 2,
    }, viewBox: "0 0 1024 1024" }, props),
    React.createElement("path", { d: "M227.999 0H0v227.999h227.999V0Z", style: {
            fill: '#71b30b',
        }, transform: "scale(4.49125)" }),
    React.createElement("path", { d: "M145.368 115.866v67.13H82.642v-67.13H27.898V44.999h172.204v70.867h-54.734Z", style: {
            fill: '#5a8f09',
        }, transform: "scale(4.49125)" }),
    React.createElement("path", { d: "M145.368 115.866v67.13H82.642v-67.13H27.899V44.997h172.199v70.869h-54.731.001ZM38.162 55.261V105.6h54.743v67.131h42.198l-.012-67.131h54.744V55.261H38.162Z", style: {
            fill: 'url(#nette-tester_svg__a)',
        }, transform: "scale(4.49125)" }),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "nette-tester_svg__a", x1: 0, x2: 1, y1: 0, y2: 0, gradientTransform: "rotate(-89.658 142.885 32.553) scale(125.85)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: '#bcbcbc',
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 0.44, style: {
                    stopColor: '#ddd',
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: '#fefefe',
                    stopOpacity: 1,
                } }))))); };
export default SvgNetteTester;
