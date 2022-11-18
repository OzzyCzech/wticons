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
var SvgDiscord = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", style: {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: 2,
        }, viewBox: "0 0 1024 1024", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M60.105 4.898A58.568 58.568 0 0 0 45.653.415a.222.222 0 0 0-.233.11 40.686 40.686 0 0 0-1.799 3.697c-5.457-.817-10.887-.817-16.232 0-.484-1.164-1.2-2.587-1.827-3.697a.23.23 0 0 0-.233-.11 58.415 58.415 0 0 0-14.451 4.483.2.2 0 0 0-.095.082C1.578 18.731-.944 32.144.293 45.391a.246.246 0 0 0 .093.167c6.073 4.459 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.077 42.077 0 0 0 3.627-5.9.224.224 0 0 0-.123-.312 38.871 38.871 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378 31.17 31.17 0 0 0 1.1-.862.22.22 0 0 1 .229-.031c11.62 5.305 24.199 5.305 35.682 0a.22.22 0 0 1 .232.028c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.36 36.36 0 0 1-5.541 2.637.226.226 0 0 0-.12.315 47.169 47.169 0 0 0 3.624 5.897.226.226 0 0 0 .249.085c5.801-1.795 11.684-4.503 17.757-8.962a.228.228 0 0 0 .092-.164c1.481-15.315-2.479-28.618-10.497-40.412a.183.183 0 0 0-.092-.084ZM23.726 37.325c-3.498 0-6.381-3.211-6.381-7.156 0-3.944 2.827-7.156 6.381-7.156 3.582 0 6.437 3.24 6.381 7.156 0 3.945-2.827 7.156-6.381 7.156Zm23.592 0c-3.498 0-6.381-3.211-6.381-7.156 0-3.944 2.827-7.156 6.381-7.156 3.582 0 6.437 3.24 6.381 7.156 0 3.945-2.799 7.156-6.381 7.156Z", style: {
                fill: '#5865f2',
                fillRule: 'nonzero',
            }, transform: "translate(7.379 121.515) scale(14.2147)" })));
};
export default SvgDiscord;
