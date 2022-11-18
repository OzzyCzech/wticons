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
var SvgBackboneJs = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#002A41", d: "M14.646 2.701v66.305l49.353 28.132V78.015l-33.017-18.82V29.633l33.017 18.821v-17.62L14.646 2.701z" }),
        React.createElement("path", { fill: "#0071B5", d: "M113.353 2.701v66.305L64 97.138V78.015l33.016-18.82V29.633L64 48.454v-17.62l49.353-28.133zM14.646 125.303V58.998l49.353-28.134v19.125L30.982 68.808v28.059l33.017-18.82v19.124l-49.353 28.133z" }),
        React.createElement("path", { fill: "#002A41", d: "M113.353 125.303V58.998L64 30.864v19.125l33.016 18.819v28.059L64 78.047v19.124l49.353 28.133z" })));
};
export default SvgBackboneJs;
