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
var SvgEleventy = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#1F1F1F", d: "M18 0h92v128H18z" }),
        React.createElement("path", { fill: "#FFF", d: "M55.3 36.3h.4c1.1 0 1.5.9 1.5 2.3v41.8c0 1.8-.4 3-1.6 3l-4.8-.1c-1.2 0-1.6-1-1.6-3V45.5l-2.1.5c-1 0-1.5-.8-1.5-2.2v-3c0-1.2.4-2 1.4-2.2l8.3-2.2zm16 36.1.1 3 .6 1.3.6.6.8.1h2.2c1 0 1.7.8 1.7 2v1.9c0 1.2-.6 2-1.8 2h-3.2l-2.3-.1c-.7-.2-1.4-.5-2.2-1a5.7 5.7 0 0 1-2-1.9c-.4-.8-.8-1.9-1-3.2-.4-1.4-.5-3-.5-4.8v-16h-1.5c-1.1 0-1.6-1-1.6-2.4v-1.7c0-1.4.5-2.3 1.6-2.3h1.5v-.1l.6-12.3c0-1.5.5-2.5 1.6-2.5h3.1c1.2 0 1.6 1 1.6 2.5v12.3h3.6c1.1 0 1.6 1 1.6 2.4V54c0 1.4-.5 2.3-1.6 2.3h-3.6v16.2zm9.4 15.7c0-2 .3-3.2 1.5-3.2.2 0 .4 0 1.4.4l1.1.3.2-.1.4-.7c.3-.6.4-1.6.4-3l-.6-3.3L79 52.7v-.9c0-1.2.3-2 1.2-2H84c.5 0 1 .3 1.3.6.3.4.5.9.6 1.6l3.4 18 2.6-17.8c.1-.8.3-1.3.6-1.7.3-.4.8-.6 1.3-.6h2.6c1 0 1.4.8 1.4 2l-.1.8L92 82.2c-.5 2.5-1 4.4-1.5 5.7a6.6 6.6 0 0 1-2 3c-.9.6-1.9.9-3.1.9h-.3c-2 0-3.3-.6-4.1-1.7-.3-.4-.4-1-.4-2zM31.3 38.8l8.2-2.1h.5c1 0 1.4.8 1.4 2.2v41.9c0 1.8-.4 2.9-1.6 2.9h-4.7c-1.2 0-1.6-1.1-1.6-3v-35l-2 .6c-1.2 0-1.6-.9-1.6-2.2v-3c0-1.2.4-2 1.4-2.3z" })));
};
export default SvgEleventy;