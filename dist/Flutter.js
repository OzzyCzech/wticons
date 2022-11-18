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
var SvgFlutter = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#3FB6D3", d: "M12.3 64.2 76.3 0h39.4L32.1 83.6zm64 63.8h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z" }),
        React.createElement("path", { fill: "#27AACD", d: "m81.6 93.9-20-20-19.4 19.6 19.4 19.6z" }),
        React.createElement("path", { fill: "#19599A", d: "M115.7 128 81.6 93.9l-20 19.2L76.3 128z" }),
        React.createElement("linearGradient", { id: "flutter_svg__a", x1: 59.365, x2: 86.825, y1: 116.36, y2: 99.399, gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, stopColor: "#1b4e94" }),
            React.createElement("stop", { offset: 0.63, stopColor: "#1a5497" }),
            React.createElement("stop", { offset: 1, stopColor: "#195a9b" })),
        React.createElement("path", { fill: "url(#flutter_svg__a)", d: "m61.6 113.1 30.8-8.4-10.8-10.8z" })));
};
export default SvgFlutter;