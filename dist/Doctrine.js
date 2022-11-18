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
var SvgDoctrine = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#F56D39", d: "M52.8 36.3c-1.1-1.2-2.1-2.3-3.1-3.4-3.6-3.9-7.2-7.8-10.7-11.7-1.9-2-3.2-4.4-3.5-7.1-.4-3.3.1-6.6 2.3-9.2.5-.7 1.3-1.2 2-1.7 1.1-.6 2.2-1.2 3.4-1.6 4.1-1.3 8.1-.8 11.5 2 1.9 1.5 3.5 3.3 5.2 5.1l24.6 26.8c4.3 4.7 8.7 9.3 12.9 14.2 5.3 6 9.4 12.8 11.5 20.6.8 3 1.3 5.9 1.4 9 .5 12.3-3.2 23.1-10.9 32.6-5.7 7-13 11.6-21.8 13.9-3.1.8-6.3 1.4-9.5 1.5-2.4.1-4.8.2-7.2.1-12.3-.7-22.7-5.5-31.1-14.6-4-4.3-7.2-9-9.3-14.5-1.3-3.3-2.1-6.8-2.4-10.3-.6-8.5.4-16.7 4.1-24.4 2.3-5 5.8-9.1 9.7-12.9C37.8 45 44.6 40.5 52 37.1c.3-.1.5-.2.8-.4-.2-.2-.1-.3 0-.4zm13.4 53.8-.6.6c-2.8 2.8-5.6 5.5-8.3 8.3-1.8 1.8-3.4 3.8-4.5 6.1-.8 1.6-1.1 3.2-.5 4.9 1.6 4.8 7.7 6.6 11.5 4 1.4-1 2.8-2.2 4-3.4 6-5.6 11.9-11.2 17.8-16.8 2.9-2.7 5.2-5.9 6.6-9.6.3-.7.4-1.6.4-2.4 0-1.6-.7-3.1-1.5-4.6-1.4-2.6-3.4-4.9-5.5-7l-9.7-9.8c-3.1-3.1-6.1-6.3-9.3-9.3-1.9-1.8-4.3-3-7.1-2.9-3 .2-5.4 1.4-7 4-.6 1-1 2.2-.9 3.4.1 2.5 1.3 4.6 3 6.4 2.8 2.9 5.6 5.6 8.5 8.4 1.1 1.1 2.1 2.2 3 3.2H46.3c-2.8 0-5.7-.1-8.5.1-1.7.1-3.3.7-4.6 1.9-2.4 2.3-3.1 5.2-2.5 8.4.6 3 2.3 5.1 5.4 5.8 1.1.2 2.2.3 3.4.3l9.4.3c2.4 0 4.8-.1 7.3-.1h5.7c1.4-.2 2.8-.2 4.3-.2z" }),
        React.createElement("path", { fill: "#fff", d: "M66.2 90.1h-9.9c-2.4 0-4.8.1-7.3.1-3.1 0-6.3-.1-9.4-.3-1.1 0-2.3-.1-3.4-.3-3.1-.7-4.9-2.8-5.4-5.8-.6-3.2.1-6.1 2.5-8.4 1.3-1.2 2.9-1.8 4.6-1.9 2.8-.1 5.7-.1 8.5-.1h19.8c-1-1-2-2.1-3-3.2-2.8-2.8-5.7-5.5-8.5-8.4-1.7-1.8-2.8-3.9-3-6.4-.1-1.2.3-2.3.9-3.4 1.6-2.6 4-3.8 7-4 2.8-.2 5.1 1 7.1 2.9 3.2 3 6.2 6.2 9.3 9.3 3.3 3.3 6.5 6.5 9.7 9.8 2.1 2.1 4 4.4 5.5 7 .8 1.4 1.4 2.9 1.5 4.6 0 .8-.1 1.6-.4 2.4-1.4 3.7-3.7 6.9-6.6 9.6l-17.8 16.8c-1.3 1.2-2.6 2.4-4 3.4-3.7 2.6-9.8.8-11.5-4-.6-1.6-.3-3.3.5-4.9 1.1-2.3 2.7-4.3 4.5-6.1 2.7-2.8 5.5-5.5 8.3-8.3l.5-.4z" })));
};
export default SvgDoctrine;