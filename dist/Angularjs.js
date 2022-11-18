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
var SvgAngularjs = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#B3B3B3", d: "M63.81 1.026 4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z" }),
        React.createElement("path", { fill: "#A6120D", d: "M117.536 25.998 63.672 7.629v112.785l45.141-24.983z" }),
        React.createElement("path", { fill: "#DD1B16", d: "m11.201 26.329 8.026 69.434 44.444 24.651V7.627z" }),
        React.createElement("path", { fill: "#F2F2F2", d: "m78.499 67.67-14.827 6.934H48.044l-7.347 18.374-13.663.254 36.638-81.508L78.499 67.67zm-1.434-3.491L63.77 37.858 52.864 63.726h10.807l13.394.453z" }),
        React.createElement("path", { fill: "#B3B3B3", d: "m63.671 11.724.098 26.134 12.375 25.888H63.698l-.027 10.841 17.209.017 8.042 18.63 13.074.242z" })));
};
export default SvgAngularjs;
