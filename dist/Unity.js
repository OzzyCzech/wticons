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
var SvgUnity = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#110B09", d: "m82.48 63.578 22.418-38.402 10.832 38.402-10.832 38.398zm-10.926 6.238 22.422 38.402-39.047-9.922-28.211-28.48zM93.969 18.93 71.555 57.34H26.719L54.93 28.855zm32 31.582L112.293.031 61.25 13.559l-7.555 13.18-15.336-.109L1 63.582l37.359 36.949h.004l15.324-.113 7.57 13.176 51.035 13.527 13.676-50.473-7.762-13.07zm0 0" })));
};
export default SvgUnity;