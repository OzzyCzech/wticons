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
var SvgWebpack = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#8ed6fb", d: "M117.29 98.1 66.24 127v-22.51L98 87l19.29 11.1zm3.5-3.16V34.55l-18.68 10.8v38.81l18.67 10.77zM10.71 98.1l51 28.88v-22.49L29.94 87zm-3.5-3.16V34.55l18.68 10.8v38.81zm2.19-64.3L61.76 1v21.76L28.21 41.21l-.27.15zm109.18 0L66.24 1v21.76L99.79 41.2l.27.15 18.54-10.71z" }),
        React.createElement("path", { fill: "#1c78c0", d: "M61.76 99.37 30.37 82.1V47.92L61.76 66zm4.48 0 31.39-17.25v-34.2L66.24 66zM32.5 44 64 26.66 95.5 44 64 62.16 32.5 44z" })));
};
export default SvgWebpack;
