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
var SvgElectron = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "#47848f" },
            React.createElement("path", { d: "M49.07 32.66c-14.37-2.62-25.72.12-30.25 8-3.38 5.85-2.41 13.61 2.34 21.9a1.47 1.47 0 0 0 2.56-1.47c-4.28-7.47-5.12-14.17-2.35-19 3.76-6.51 13.89-9 27.17-6.54a1.47 1.47 0 1 0 .53-2.9zM28.63 72.61a92.2 92.2 0 0 0 22 17.34c20.84 12 43 15.25 54 7.79a1.47 1.47 0 0 0-1.66-2.43C93.11 102 72 98.92 52.07 87.39a89.27 89.27 0 0 1-21.26-16.77 1.47 1.47 0 0 0-2.18 2z" }),
            React.createElement("path", { d: "M101.06 70.81c9.41-11.11 12.69-22.29 8.17-30.11-3.32-5.76-10.35-8.8-19.69-8.92a1.47 1.47 0 0 0 0 2.95c8.4.11 14.45 2.73 17.18 7.45 3.75 6.5.82 16.47-7.87 26.74a1.47 1.47 0 1 0 2.25 1.9zM76.89 33.15a92 92 0 0 0-26.25 10.4C29.13 56 15.09 74.29 17 87.57a1.47 1.47 0 0 0 3-.43C18.23 75.35 31.53 58 52.11 46.11A89.07 89.07 0 0 1 77.51 36a1.47 1.47 0 1 0-.62-2.88z" }),
            React.createElement("path", { d: "M42 96.78C47 110.51 55 119 64.05 119c6.6 0 12.7-4.5 17.46-12.42A1.47 1.47 0 1 0 79 105c-4.28 7.12-9.53 11-14.94 11-7.52 0-14.69-7.54-19.24-20.24a1.47 1.47 0 0 0-2.77 1zm45-2.69a92.5 92.5 0 0 0 3.91-27.3c0-24.41-8.54-45.44-20.71-50.85a1.47 1.47 0 0 0-1.2 2.7c10.85 4.82 19 24.78 19 48.15a89.57 89.57 0 0 1-3.78 26.42 1.47 1.47 0 0 0 2.81.88zm27.71-1.44a7.05 7.05 0 1 0-7.05 7.05 7.05 7.05 0 0 0 7.05-7.05zm-2.95 0a4.1 4.1 0 1 1-4.1-4.1 4.1 4.1 0 0 1 4.1 4.1zM20.34 99.7a7.05 7.05 0 1 0-7.05-7.05 7.05 7.05 0 0 0 7.05 7.05zm0-2.95a4.1 4.1 0 1 1 4.1-4.1 4.1 4.1 0 0 1-4.1 4.1z" }),
            React.createElement("path", { d: "M64.05 23.13A7.05 7.05 0 1 0 57 16.08a7.05 7.05 0 0 0 7.05 7.05zm0-2.95a4.1 4.1 0 1 1 4.1-4.1 4.1 4.1 0 0 1-4.1 4.1zm1.08 51.59A5.1 5.1 0 1 1 69 65.71a5.1 5.1 0 0 1-3.87 6.06z" }))));
};
export default SvgElectron;
