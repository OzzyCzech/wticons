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
var SvgSymfony = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#1A171B", d: "M64 2.3C29.9 2.3 2.3 29.9 2.3 64s27.6 61.7 61.7 61.7 61.7-27.6 61.7-61.7S98.1 2.3 64 2.3zM97.3 38c-2.9.1-4.8-1.6-4.9-4.2 0-1 .2-1.8.9-2.8.6-1.2.8-1.4.8-1.9-.1-1.6-2.5-1.7-3.2-1.7-9.3.3-11.7 12.8-13.7 23l-1 5.4c5.3.8 9.1-.2 11.2-1.5 3-1.9-.8-3.9-.4-6.1.5-2.2 2.5-3.3 4.1-3.4 2.3-.1 3.9 2.3 3.8 4.7-.1 3.9-5.3 9.4-15.8 9.1-1.3 0-2.4-.1-3.5-.2l-2 10.9c-1.8 8.2-4.1 19.5-12.5 29.3-7.2 8.6-14.5 9.9-17.8 10-6.1.2-10.2-3.1-10.3-7.4-.1-4.2 3.6-6.5 6-6.6 3.3-.1 5.5 2.3 5.6 5 .1 2.3-1.1 3-1.9 3.5-.5.4-1.3.9-1.3 1.8 0 .4.5 1.3 1.8 1.3 2.6-.1 4.3-1.4 5.5-2.2 6-5 8.3-13.7 11.3-29.4l.6-3.8c1-5.1 2.2-10.9 3.9-16.6-4.2-3.2-6.7-7.1-12.4-8.6-3.9-1.1-6.2-.2-7.9 1.9-2 2.5-1.3 5.7.6 7.6l3.1 3.5c3.9 4.5 6 7.9 5.2 12.6-1.1 7.3-10 13-20.5 9.8-9-2.8-10.6-9.1-9.5-12.6.9-3.1 3.4-3.7 5.8-2.9 2.6.8 3.6 3.9 2.8 6.3-.1.3-.2.7-.5 1.2-.3.7-.8 1.2-1.1 2-.6 1.9 2 3.2 3.8 3.8 4 1.2 7.9-.9 8.9-4.1.9-3-1-5.1-1.7-5.9l-3.8-4.1c-1.7-1.9-5.6-7.3-3.7-13.4.7-2.3 2.2-4.8 4.4-6.4 4.6-3.5 9.7-4 14.5-2.6 6.2 1.8 9.2 5.9 13.1 9.1 2.2-6.3 5.2-12.6 9.7-17.8 4.1-4.8 9.5-8.2 15.8-8.5 6.3-.2 11 2.6 11.2 7.1-.1 2-1.2 5.7-5 5.8z" })));
};
export default SvgSymfony;
