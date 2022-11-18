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
var SvgHandlebars = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M14.59 62.67a7.14 7.14 0 0 0 2.31-3.48c.46-2 .36-3.94-2.31-5.3C7.82 50.47 3.45 56.57 2.77 58s-1.74 3.68-1 8.84 3.19 9.9 11 11.73a32.89 32.89 0 0 0 22-2.57c6.84-3.26 19.7-9 22.94-9.58a28.15 28.15 0 0 1 6.49-.81v-7.85a18 18 0 0 0-17.38-9.15C34.43 49.59 29.51 56 26.49 58.7s-8.61 9.17-12.37 8-4.81-5.7-3.48-7.14 2.37-1.18 3.18 0a6.24 6.24 0 0 1 .77 3.11z" }),
        React.createElement("path", { d: "M113.41 62.67a7.14 7.14 0 0 1-2.31-3.48c-.46-2-.36-3.94 2.31-5.3 6.76-3.43 11.13 2.67 11.81 4.11s1.74 3.68 1 8.84-3.19 9.9-11 11.73A32.89 32.89 0 0 1 93.23 76c-6.84-3.26-19.7-9-22.94-9.58a28.15 28.15 0 0 0-6.49-.81v-7.85a18 18 0 0 1 17.38-9.15c12.39 1 17.32 7.38 20.34 10.08s8.61 9.17 12.37 8 4.81-5.76 3.48-7.19-2.37-1.18-3.18 0a6.24 6.24 0 0 0-.78 3.17z" })));
};
export default SvgHandlebars;