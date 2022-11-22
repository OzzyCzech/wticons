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
var SvgNpm = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", style: {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 2,
    }, viewBox: "0 0 256 256" }, props),
    React.createElement("path", { d: "M0 256V0h256v256H0Z", style: {
            fill: '#c12127',
            fillRule: 'nonzero',
        } }),
    React.createElement("path", { d: "M48 48h160v160h-32V80h-48v128H48V48Z", style: {
            fill: '#fff',
            fillRule: 'nonzero',
        } }))); };
export default SvgNpm;
