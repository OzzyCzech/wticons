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
var SvgGitter = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", style: {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 2,
    }, viewBox: "0 0 256 256" }, props),
    React.createElement("path", { d: "M0 0h256v256H0z", style: {
            fill: 'url(#gitter_svg__a)',
            fillRule: 'nonzero',
        } }),
    React.createElement("path", { d: "M83.914 62.873h12.525v82.661H83.914V62.873Zm76.149 20.039h12.524v62.622h-12.524V82.912Zm-50.599 0h12.524v110.466h-12.524V82.912Zm25.049 0h12.525v110.466h-12.525V82.912Z", style: {
            fill: '#fff',
            fillRule: 'nonzero',
        } }),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "gitter_svg__a", x1: 0, x2: 1, y1: 0, y2: 0, gradientTransform: "matrix(0 256 -256 0 128 0)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: '#fb0766',
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: '#c50948',
                    stopOpacity: 1,
                } }))))); };
export default SvgGitter;
