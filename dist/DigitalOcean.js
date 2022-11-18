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
var SvgDigitalOcean = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "#0080FF" },
            React.createElement("path", { d: "M63.724 110.725V92.543c19.352 0 34.282-19.008 26.817-39.118-2.765-7.438-8.57-13.499-16.312-16.254-19.905-7.162-38.982 7.714-38.982 26.722H17c0-30.303 29.582-54.27 61.93-44.352 14.1 4.407 25.158 15.427 29.582 29.476 9.953 32.231-14.1 61.708-44.788 61.708z" }),
            React.createElement("path", { d: "M64 92.543H45.753V74.637H64v17.906zm-18.247 14.05H31.929v-14.05h13.824v14.05zm-13.824-14.05H20.318v-11.57h11.611v11.57z" }))));
};
export default SvgDigitalOcean;