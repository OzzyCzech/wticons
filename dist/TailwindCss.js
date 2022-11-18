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
var SvgTailwindCss = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#07B6D5", d: "M489.5 226.499c-161.5 5.133-209.5 120.5-220.5 183 14.333-23.167 59.5-73.999 126-73.999 77.5 0 136.5 86.5 172.5 113.5 43.737 32.803 131.623 76.115 247 41 92-28 134.667-125.668 144-172.001-44.5 60.5-112 96.839-195.5 54-57.5-29.5-100.5-150.999-273.5-145.5ZM261 500.999c-161.5 5.133-209.5 120.5-220.5 183C54.833 660.832 100 610 166.5 610 244 610 303 696.5 339 723.5c43.737 32.803 131.623 76.115 247 41 92-28 134.667-125.668 144-172.001-44.5 60.5-112 96.839-195.5 54C477 616.999 434 495.5 261 500.999Z" })));
};
export default SvgTailwindCss;
