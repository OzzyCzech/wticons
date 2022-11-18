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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
var SvgKotlin = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("linearGradient", { id: "kotlin_svg__a", x1: -11.899, x2: 40.299, y1: 48.694, y2: -8.322, gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, stopColor: "#1c93c1" }),
            React.createElement("stop", { offset: 0.163, stopColor: "#2391c0" }),
            React.createElement("stop", { offset: 0.404, stopColor: "#378bbe" }),
            React.createElement("stop", { offset: 0.696, stopColor: "#587eb9" }),
            React.createElement("stop", { offset: 0.995, stopColor: "#7f6cb1" })),
        React.createElement("path", { fill: "url(#kotlin_svg__a)", d: "M0 0h65.4L0 64.4z" }),
        React.createElement("linearGradient", { id: "kotlin_svg__b", x1: 43.553, x2: 95.988, y1: 149.174, y2: 94.876, gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, stopColor: "#1c93c1" }),
            React.createElement("stop", { offset: 0.216, stopColor: "#2d8ebf" }),
            React.createElement("stop", { offset: 0.64, stopColor: "#587eb9" }),
            React.createElement("stop", { offset: 0.995, stopColor: "#7f6cb1" })),
        React.createElement("path", { fill: "url(#kotlin_svg__b)", d: "M128 128 64.6 62.6 0 128z" }),
        React.createElement("linearGradient", { id: "kotlin_svg__c", x1: 3.24, x2: 92.481, y1: 95.249, y2: 2.116, gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, stopColor: "#c757a7" }),
            React.createElement("stop", { offset: 0.046, stopColor: "#ca5a9e" }),
            React.createElement("stop", { offset: 0.241, stopColor: "#d66779" }),
            React.createElement("stop", { offset: 0.428, stopColor: "#e17357" }),
            React.createElement("stop", { offset: 0.6, stopColor: "#e97c3a" }),
            React.createElement("stop", { offset: 0.756, stopColor: "#ef8324" }),
            React.createElement("stop", { offset: 0.888, stopColor: "#f28817" }),
            React.createElement("stop", { offset: 0.982, stopColor: "#f48912" })),
        React.createElement("path", { fill: "url(#kotlin_svg__c)", d: "M0 128 128 0H64.6L0 63.7z" })));
};
export default SvgKotlin;
