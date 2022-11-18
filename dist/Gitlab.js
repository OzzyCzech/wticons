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
var SvgGitlab = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#FC6D26", d: "m126.615 72.31-7.034-21.647L105.64 7.76c-.716-2.206-3.84-2.206-4.556 0l-13.94 42.903H40.856L26.916 7.76c-.717-2.206-3.84-2.206-4.557 0L8.42 50.664 1.385 72.31a4.792 4.792 0 0 0 1.74 5.358L64 121.894l60.874-44.227a4.793 4.793 0 0 0 1.74-5.357" }),
        React.createElement("path", { fill: "#E24329", d: "m64 121.894 23.144-71.23H40.856L64 121.893z" }),
        React.createElement("path", { fill: "#FC6D26", d: "m64 121.894-23.144-71.23H8.42L64 121.893z" }),
        React.createElement("path", { fill: "#FCA326", d: "M8.42 50.663 1.384 72.31a4.79 4.79 0 0 0 1.74 5.357L64 121.894 8.42 50.664z" }),
        React.createElement("path", { fill: "#E24329", d: "M8.42 50.663h32.436L26.916 7.76c-.717-2.206-3.84-2.206-4.557 0L8.42 50.664z" }),
        React.createElement("path", { fill: "#FC6D26", d: "m64 121.894 23.144-71.23h32.437L64 121.893z" }),
        React.createElement("path", { fill: "#FCA326", d: "m119.58 50.663 7.035 21.647a4.79 4.79 0 0 1-1.74 5.357L64 121.894l55.58-71.23z" }),
        React.createElement("path", { fill: "#E24329", d: "M119.58 50.663H87.145l13.94-42.902c.717-2.206 3.84-2.206 4.557 0l13.94 42.903z" })));
};
export default SvgGitlab;
