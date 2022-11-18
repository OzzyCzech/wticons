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
var SvgCakephp = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#d43d44", d: "M2 73.69V93c0 10.69 27.75 19.35 62 19.35V93C29.75 93 2 84.36 2 73.69zm62-19.35 48.5 12c8.44-3.3 13.51-7.5 13.51-12V35c0-10.68-27.76-19.35-62-19.35S2 24.29 2 35v19.34C2 65 29.75 73.69 64 73.69V54.34zm48.49 31.4L64 73.69V93l48.5 12.05c8.43-3.27 13.5-7.46 13.5-12.05V73.69c0 4.55-5.07 8.74-13.51 12.05z" })));
};
export default SvgCakephp;
