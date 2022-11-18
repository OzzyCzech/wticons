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
var SvgCodeigniter = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#EE4323", d: "m89.708 48.868-.758-.414c.399.964.529 1.786.515 2.521a8.627 8.627 0 0 0 .248-1.847 8.22 8.22 0 0 1-.273 2.231l.025-.385a8.52 8.52 0 0 1-1.074 2.558l.235-.25c-2.88 4.819-10.737 5.872-14.612.895-6.22-7.99.128-16.604 1.017-25.065 1.111-10.604-5.538-20.899-13.783-27.06 4.541 7.346-1.442 17.066-6.229 22.498-4.642 5.269-10.286 9.667-15.41 14.451-5.503 5.143-10.797 10.555-15.319 16.588-9.049 12.074-14.59 27.26-10.518 42.325 4.068 15.056 17.108 24.639 31.834 28.027-7.429-3.212-14.381-11.373-14.397-19.723-.019-9.106 5.75-16.835 12.927-21.914-.863 3.259-1.334 6.24.803 9.155 1.988 2.711 5.468 4.027 8.753 3.312 7.679-1.679 8.03-10.12 3.479-15.038-4.501-4.868-8.855-10.371-7.143-17.433.858-3.54 3.032-6.854 5.787-9.226-2.118 5.563 3.897 11.049 7.859 13.779 6.876 4.741 14.416 8.325 20.738 13.881 6.648 5.84 11.559 13.736 10.567 22.896-1.076 9.927-8.964 16.832-17.811 20.317 18.696-4.128 38.018-18.639 38.411-39.376.329-17.058-11.373-30.187-25.871-37.703z" })));
};
export default SvgCodeigniter;
