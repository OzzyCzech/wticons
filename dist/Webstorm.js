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
var SvgWebstorm = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#2788b5", d: "M75.78 113.66c1.28-1.6 2.79-3.36 4.58-5.42l.89-1c1.11-1.29 2-2.28 2.93-3.24a70.64 70.64 0 0 0 6.09-7.36c2.74-3.74 4.51-6.55 4.22-11.37-.14-2.48-.24-4.18-1.86-6.18a66.7 66.7 0 0 0-4.69-4.78c-2.07-2-3.87-3.9-6.31-6.44s-5.6-9-5.6-9a41.4 41.4 0 0 1-3.19-10.74l-7.18-36.8H45.22l-10 46.41-8.87-46.46H2.22L24 116.72h20.32l10.17-45.64 9 45.64h9.44z" }),
        React.createElement("path", { fill: "#fa930d", d: "M118.34 17.59c2.14-2.48 3.9-4.48 5.34-6.3H91.24c-1.93 2.46-5.85 7.21-8.09 11.43-3 5.58-5.39 9.76-5.63 20l.11 3.31c0 4.9 3.5 12.08 3.5 12.08a43.35 43.35 0 0 0 3.58 5.61l.65.85c3.5 4 8.78 8.48 11.12 11.35 2.73 3.37 2.8 6.53 3 9 .39 6.65-2.29 10.65-5.17 14.58-4.35 5.93-5.92 7-9.27 10.91-2.14 2.47-3.89 4.48-5.34 6.29h33.51a90.25 90.25 0 0 0 7-11.42c3-5.58 5.39-9.76 5.63-20l-.16-3.28c0-4.9-3.5-12.09-3.5-12.09a44.31 44.31 0 0 0-3.59-5.61l-.64-.85c-3.5-4-8.79-8.48-11.12-11.35-2.73-3.38-2.8-6.54-3-9-.4-6.64 2.29-10.65 5.17-14.58 4.42-5.95 6-7.06 9.34-10.93z" })));
};
export default SvgWebstorm;