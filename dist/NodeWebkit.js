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
var SvgNodeWebkit = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#3D3B47", d: "M64 125.8c-1.2 0-2.3-.3-3.1-.7L12.6 97.3c-1.7-1-3.1-3.5-3.1-5.4V36.1c0-1.9 1.5-4.4 3.1-5.4L60.9 2.9c.8-.5 1.9-.7 3.1-.7 1.2 0 2.3.3 3.1.7l48.2 27.9c1.7 1 3.1 3.5 3.1 5.4v55.7c0 1.9-1.5 4.4-3.1 5.4l-48.2 27.9c-.8.4-1.9.6-3.1.6z" }),
        React.createElement("path", { fill: "#ccc", d: "M64 3.7c.9 0 1.8.2 2.4.5L114.6 32c1.2.7 2.4 2.7 2.4 4.1v55.7c0 1.4-1.2 3.4-2.4 4.1l-48.2 27.9c-.6.3-1.5.5-2.4.5-.9 0-1.8-.2-2.4-.5L13.4 96c-1.2-.7-2.4-2.7-2.4-4.1V36.1c0-1.4 1.2-3.4 2.4-4.1L61.6 4.2c.6-.3 1.5-.5 2.4-.5m0-3c-1.4 0-2.8.3-3.9.9L11.9 29.4C9.8 30.7 8 33.7 8 36.1v55.7c0 2.5 1.7 5.5 3.9 6.7l48.2 27.9c1.1.6 2.5.9 3.9.9s2.8-.3 3.9-.9l48.2-27.9c2.1-1.2 3.9-4.2 3.9-6.7V36.1c0-2.5-1.7-5.5-3.9-6.7L67.9 1.6C66.8 1 65.4.7 64 .7z" }),
        React.createElement("path", { fill: "#EFF3F3", d: "M64 59.7h.3c1.4.1 2.7.9 3.5 2.1.4.7.6 1.6.6 2.5-.2 2.3-2 4-4.3 4h-.3c-1.4-.1-2.7-.9-3.5-2.1-.4-.7-.6-1.6-.6-2.5.1-2.2 2-4 4.3-4m0-.3c-2.4 0-4.4 1.9-4.6 4.3-.1.9.1 1.8.6 2.6.8 1.3 2.1 2.2 3.7 2.3h.3c2.4 0 4.4-1.9 4.6-4.3.1-.9-.2-1.8-.6-2.6-.8-1.3-2.1-2.2-3.7-2.3H64z" }),
        React.createElement("path", { fill: "#EFF3F3", d: "M64.1 62.5c.8.1 1.5.8 1.4 1.6-.1.8-.8 1.5-1.6 1.4-.8-.1-1.5-.8-1.4-1.6 0-.8.8-1.5 1.6-1.4zm-.1 7.6h-.4c-2-.1-3.9-1.3-4.9-3-.6-1.1-.9-2.3-.8-3.5.1-1.4.7-2.7 1.6-3.7v-.1L20 89.9l45.4-20c-.5.1-.9.2-1.4.2z" }),
        React.createElement("path", { fill: "#0977F7", d: "M62.5 58.1c.6-.1 1.2-.2 1.9-.2 2 .1 3.9 1.3 4.9 3 .6 1.1.9 2.3.8 3.5-.1 1.5-.7 2.8-1.7 3.8l39.9-29.4-45.8 19.3z" })));
};
export default SvgNodeWebkit;
