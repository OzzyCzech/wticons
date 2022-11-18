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
var SvgFedora = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#294172", d: "M127.82 64.004C127.82 28.754 99.246.18 64 .18 28.766.18.203 28.73.18 63.957v49.39c.02 7.997 6.504 14.473 14.508 14.473h49.335c35.239-.015 63.797-28.578 63.797-63.816" }),
        React.createElement("path", { fill: "none", stroke: "#3c6eb4", strokeWidth: 14.003, d: "M36.973 68.12H59.91v22.94c0 12.66-10.273 22.937-22.937 22.937-12.66 0-22.934-10.277-22.934-22.937 0-12.66 10.274-22.938 22.934-22.938zm0 0" }),
        React.createElement("path", { fill: "none", stroke: "#3c6eb4", strokeWidth: 14.003, d: "M82.738 68.164H59.801V45.231c0-12.66 10.277-22.938 22.937-22.938 12.66 0 22.938 10.274 22.938 22.938 0 12.66-10.278 22.933-22.938 22.933zm0 0" }),
        React.createElement("path", { fill: "#fff", d: "M66.926 61.137v29.89c0 16.54-13.41 29.953-29.95 29.953-2.511 0-4.296-.285-6.617-.89-3.39-.887-6.156-3.664-6.16-6.895 0-3.906 2.836-6.746 7.074-6.746 2.016 0 2.747.387 5.704.387 8.718 0 15.793-7.063 15.808-15.785V77.312c0-1.23-1-2.23-2.234-2.226l-10.387-.004c-3.867 0-6.996-3.086-6.996-6.965 0-3.906 3.16-6.98 7.07-6.98" }),
        React.createElement("path", { fill: "#fff", d: "M52.785 75.148V45.262c0-16.543 13.41-29.953 29.953-29.953 2.508 0 4.293.28 6.617.89 3.387.887 6.157 3.664 6.157 6.895 0 3.906-2.836 6.746-7.07 6.746-2.02 0-2.75-.387-5.704-.387-8.722 0-15.797 7.063-15.812 15.781v13.743a2.235 2.235 0 0 0 2.234 2.226l10.387.004c3.871 0 6.996 3.086 6.996 6.965.004 3.906-3.16 6.98-7.07 6.98" }),
        React.createElement("path", { fill: "#3c6eb4", d: "M116.809 116.773v-2.652l-1.211 2.781-1.18-2.78v2.651h-.68v-4.187h.711l1.168 2.676 1.149-2.676h.722v4.187zm-4.954-3.484v3.484h-.71v-3.484h-1.192v-.703h3.09v.703" })));
};
export default SvgFedora;