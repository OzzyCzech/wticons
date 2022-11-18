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
var SvgHeroku = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#6762A6", d: "M114 13.9C114 7.3 108.7 2 102.1 2H25.9C19.3 2 14 7.3 14 13.9v100.3c0 6.6 5.3 11.9 11.9 11.9h76.3c6.6 0 11.9-5.3 11.9-11.9V13.9zm-4 .1v99.3c0 4.7-3.5 8.7-8.2 8.7H26.5c-4.7 0-8.5-4-8.5-8.7V14c0-4.7 3.9-8 8.5-8h75.2c4.7 0 8.4 3.6 8.4 8.3l-.1-.3zm-73 94.7 14.1-14.1L37 80.5zm14-60.9V18.4l-13.9.1s.1 45.9.2 45.7C80.1 47.5 77 59.4 77 59.4v49.4l-.1.2H90V59.5c0-27.1-39-11.7-39-11.7zM70 36h14.8c8-10 10.7-17 10.7-17H80.2S75.3 30 70 36z" })));
};
export default SvgHeroku;