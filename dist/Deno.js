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
var SvgDeno = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 30 30", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { clipPath: "url(#deno_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "M15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0Z" }),
            React.createElement("path", { fill: "#fff", d: "M14.664 22.34a.733.733 0 0 0-.893.498l-.006.018-.996 3.691-.004.018a.732.732 0 0 0 1.414.381l.005-.017.996-3.691.004-.018a.735.735 0 0 0 .016-.084l.003-.028-.024-.12-.034-.171-.022-.108a.732.732 0 0 0-.46-.37Zm-6.942-3.802a.738.738 0 0 0-.045.114l-.007.024-.996 3.692-.005.018a.732.732 0 0 0 1.414.381l.005-.018.903-3.347a6.622 6.622 0 0 1-1.269-.864Zm-2.375-4.245a.732.732 0 0 0-.893.498l-.005.018-.996 3.692-.005.017a.732.732 0 0 0 1.414.382l.005-.018.996-3.691.005-.018a.732.732 0 0 0-.52-.88Zm22.335-.838a.732.732 0 0 0-.893.498l-.005.018-.996 3.691-.005.018a.732.732 0 0 0 1.414.382l.005-.018.996-3.692.005-.017a.732.732 0 0 0-.521-.88ZM3.178 8.525a13.383 13.383 0 0 0-1.564 4.908.732.732 0 0 0 1.252-.275l.005-.018.996-3.691.005-.018a.732.732 0 0 0-.694-.906Zm21.981.026a.732.732 0 0 0-.893.498l-.005.018-.996 3.691-.005.018a.732.732 0 0 0 1.414.382l.005-.018.996-3.691.005-.018a.732.732 0 0 0-.521-.88ZM7.513 5.04a.732.732 0 0 0-.893.5l-.005.017-.996 3.691-.005.018a.732.732 0 0 0 1.414.382l.005-.018.996-3.691.005-.018a.732.732 0 0 0-.521-.88Zm12.799.698a.732.732 0 0 0-.893.5l-.005.017-.67 2.48c.434.214.848.466 1.237.753l.064.048.783-2.9.004-.017a.732.732 0 0 0-.52-.88Zm-6.515-4.162a13.47 13.47 0 0 0-1.393.197l-.097.02-.929 3.441-.004.018a.732.732 0 0 0 1.413.381l.005-.017.997-3.692.004-.017a.728.728 0 0 0 .004-.33Zm9.166 2.55-.196.726-.005.017a.732.732 0 0 0 1.414.382l.005-.018.021-.078a13.548 13.548 0 0 0-1.153-.965l-.086-.064Zm-5.796-2.43-.353 1.31-.005.018a.732.732 0 0 0 1.414.381l.005-.017.372-1.378c-.438-.121-.881-.22-1.329-.296l-.104-.017ZM9.69 24.625a.733.733 0 0 1 1.415.382l-.005.018-.713 2.641-.1-.036a13.38 13.38 0 0 1-1.26-.546l.659-2.441.005-.018Z" }),
            React.createElement("path", { fill: "#fff", d: "M14.414 8.49c-4.362 0-7.755 2.747-7.755 6.162 0 3.225 3.122 5.284 7.962 5.181.412-.009.53.268.665.64.134.373.494 2.337.78 3.839.257 1.344.518 2.693.717 4.048 3.16-.418 6.083-1.98 8.225-4.334l-2.284-8.517c-.57-2.057-1.235-3.953-2.996-5.33-1.416-1.107-3.216-1.688-5.314-1.688Z" }),
            React.createElement("path", { fill: "currentColor", d: "M15.352 10.957a.937.937 0 1 1 0 1.875.937.937 0 0 1 0-1.875Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "deno_svg__a" },
                React.createElement("path", { fill: "#fff", d: "M0 0h30v30H0z" })))));
};
export default SvgDeno;
