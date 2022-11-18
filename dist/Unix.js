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
var SvgUnix = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#4051b5", d: "M7 3v6.554h40.792V3H7zm71.75 0v6.554H121V3H78.75zM7 16.835v6.554h40.792v-6.554H7zm71.75 0v6.554H121v-6.554H78.75zM7 30.306v6.554h40.792v-6.554H7zm71.75 0v6.554H121v-6.554H78.75zM7 60.597c0 22.573.073 23.52 2.55 30.91 2.658 8.047 6.228 13.872 11.8 19.442 9.761 9.685 22.4 14.454 39.736 15 19.887.62 35.002-4.369 45.71-15.145 5.5-5.534 9.615-12.488 11.982-20.243 2.15-6.99 2.222-8.155 2.222-30.073V40.5l-21.015.073-21.052.11s-.182.066-.182 28.943c0 32.984-5.526 38.91-16.192 38.91s-14.901-5.67-14.694-39.747c.172-28.193-.11-28.289-.11-28.289H7v20.097z" })));
};
export default SvgUnix;
