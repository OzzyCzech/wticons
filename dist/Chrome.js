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
var SvgChrome = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("circle", { cx: 64.149, cy: 64.236, r: 60.999, fill: "#fff" }),
        React.createElement("path", { fillOpacity: 0.1, d: "M102.966 75.327c0-21.439-17.379-38.819-38.817-38.819s-38.818 17.38-38.818 38.819h11.09c0-15.314 12.415-27.727 27.727-27.727 15.313 0 27.727 12.413 27.727 27.727" }),
        React.createElement("circle", { cx: 66.922, cy: 71.999, r: 21.072, fillOpacity: 0.1 }),
        React.createElement("linearGradient", { id: "chrome_svg__a", x1: 395.191, x2: 395.191, y1: 484.168, y2: 484.723, gradientTransform: "matrix(82 0 0 82 -32341.5 -39660.313)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, stopColor: "#81B4E0" }),
            React.createElement("stop", { offset: 1, stopColor: "#0C5A94" })),
        React.createElement("circle", { cx: 64.149, cy: 64.235, r: 22.736, fill: "url(#chrome_svg__a)" }),
        React.createElement("linearGradient", { id: "chrome_svg__b", x1: -608.91, x2: -608.91, y1: -597.648, y2: -547.185, gradientTransform: "translate(675 599.775)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, stopColor: "#F06B59" }),
            React.createElement("stop", { offset: 1, stopColor: "#DF2227" })),
        React.createElement("path", { fill: "url(#chrome_svg__b)", d: "M119.602 36.508C104.336 5.792 67.06-6.732 36.343 8.534A62.105 62.105 0 0 0 12.578 29.3l24.955 43.253c-4.597-14.606 3.521-30.174 18.127-34.77a27.676 27.676 0 0 1 7.935-1.274" }),
        React.createElement("linearGradient", { id: "chrome_svg__c", x1: -657.835, x2: -632.327, y1: -491.393, y2: -533.537, gradientTransform: "translate(675 599.775)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, stopColor: "#388B41" }),
            React.createElement("stop", { offset: 1, stopColor: "#4CB749" })),
        React.createElement("path", { fill: "url(#chrome_svg__c)", d: "M12.578 29.3c-19.1 28.492-11.486 67.071 17.005 86.171a62.133 62.133 0 0 0 29.575 10.319l26.063-44.363c-9.745 11.811-27.22 13.486-39.032 3.74a27.717 27.717 0 0 1-8.657-12.613" }),
        React.createElement("linearGradient", { id: "chrome_svg__d", x1: -572.385, x2: -599.557, y1: -486.91, y2: -552.345, gradientTransform: "translate(675 599.775)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, stopColor: "#E4B022" }),
            React.createElement("stop", { offset: 0.3, stopColor: "#FCD209" })),
        React.createElement("path", { fill: "url(#chrome_svg__d)", d: "M59.158 125.791c34.204 2.585 64.027-23.047 66.613-57.25a62.097 62.097 0 0 0-6.17-32.031H63.595c15.312.07 27.67 12.541 27.598 27.854a27.725 27.725 0 0 1-5.972 17.064" }),
        React.createElement("linearGradient", { id: "chrome_svg__e", x1: -649.391, x2: -649.391, y1: -528.885, y2: -573.247, gradientTransform: "translate(675 599.775)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, stopOpacity: 0.15 }),
            React.createElement("stop", { offset: 0.3, stopOpacity: 0.06 }),
            React.createElement("stop", { offset: 1, stopOpacity: 0.03 })),
        React.createElement("path", { fill: "url(#chrome_svg__e)", d: "m12.578 29.3 24.955 43.253a27.725 27.725 0 0 1 1.107-18.854L13.686 27.636" }),
        React.createElement("linearGradient", { id: "chrome_svg__f", x1: -588.158, x2: -618.657, y1: -514.559, y2: -483.505, gradientTransform: "translate(675 599.775)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, stopOpacity: 0.15 }),
            React.createElement("stop", { offset: 0.3, stopOpacity: 0.06 }),
            React.createElement("stop", { offset: 1, stopOpacity: 0.03 })),
        React.createElement("path", { fill: "url(#chrome_svg__f)", d: "m59.158 125.791 26.063-44.363a27.731 27.731 0 0 1-16.082 9.426l-11.091 34.937" }),
        React.createElement("linearGradient", { id: "chrome_svg__g", x1: -588.6, x2: -584.163, y1: -505.621, y2: -549.431, gradientTransform: "translate(675 599.775)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, stopOpacity: 0.15 }),
            React.createElement("stop", { offset: 0.3, stopOpacity: 0.06 }),
            React.createElement("stop", { offset: 1, stopOpacity: 0.03 })),
        React.createElement("path", { fill: "url(#chrome_svg__g)", d: "M119.602 36.508H63.595a27.727 27.727 0 0 1 21.626 10.537l35.491-8.873" })));
};
export default SvgChrome;