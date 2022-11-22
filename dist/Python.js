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
var SvgPython = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", style: {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 2,
    }, viewBox: "0 0 256 255" }, props),
    React.createElement("path", { d: "M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.771c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.669.072 126.916.072ZM92.802 19.659a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.131 11.12 11.12 0 0 1-11.131-11.131 11.12 11.12 0 0 1 11.131-11.13Z", style: {
            fill: 'url(#python_svg__a)',
            fillRule: 'nonzero',
        } }),
    React.createElement("path", { d: "M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127h-61.868v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.319v56.014s-5.235 33.897 62.518 33.897Zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.131 11.12 11.12 0 0 1 11.13-11.13 11.12 11.12 0 0 1 11.131 11.13 11.12 11.12 0 0 1-11.131 11.131Z", style: {
            fill: 'url(#python_svg__b)',
            fillRule: 'nonzero',
        } }),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "python_svg__a", x1: 0, x2: 1, y1: 0, y2: 0, gradientTransform: "rotate(44.84 -15.437 41.38) scale(178.091)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: '#387eb8',
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: '#366994',
                    stopOpacity: 1,
                } })),
        React.createElement("linearGradient", { id: "python_svg__b", x1: 0, x2: 1, y1: 0, y2: 0, gradientTransform: "rotate(43.518 -78.364 179.92) scale(187.027)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: '#ffe052',
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: '#ffc331',
                    stopOpacity: 1,
                } }))))); };
export default SvgPython;
