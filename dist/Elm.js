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
var SvgElm = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#efa500", d: "m64 60.74 25.65-25.65h-51.3L64 60.74z" }),
        React.createElement("path", { fill: "#8dd737", d: "m7.91 4.65 25.83 25.84h56.17L64.07 4.65H7.91zm59.353 59.343 28.08-28.08 27.951 27.953-28.08 28.079z" }),
        React.createElement("path", { fill: "#60b5cc", d: "M123.35 57.42V4.65H70.58l52.77 52.77z" }),
        React.createElement("path", { fill: "#34495e", d: "M60.74 64 4.65 7.91V120.1L60.74 64z" }),
        React.createElement("path", { fill: "#efa500", d: "m98.47 95.21 24.88 24.89V70.33L98.47 95.21z" }),
        React.createElement("path", { fill: "#60b5cc", d: "M64 67.26 7.91 123.35h112.18L64 67.26z" })));
};
export default SvgElm;
