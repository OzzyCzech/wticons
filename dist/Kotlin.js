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
var SvgKotlin = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", style: {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 2,
    }, viewBox: "0 0 256 256" }, props),
    React.createElement("path", { d: "M256 256H0V0h256L128 127.949 256 256Z", style: {
            fill: 'url(#kotlin_svg__a)',
            fillRule: 'nonzero',
        } }),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "kotlin_svg__a", x1: 0, x2: 1, y1: 0, y2: 0, gradientTransform: "rotate(134.989 127.994 53.016) scale(362.042)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: '#e44857',
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 0, style: {
                    stopColor: '#e44857',
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 0.47, style: {
                    stopColor: '#c711e1',
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: '#7f52ff',
                    stopOpacity: 1,
                } }))))); };
export default SvgKotlin;
