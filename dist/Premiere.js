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
var SvgPremiere = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", style: {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: 2,
        }, viewBox: "0 0 1024 1024", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0Z", style: {
                fill: '#00005b',
                fillRule: 'nonzero',
            }, transform: "translate(18.802 31.132) scale(4.10998)" }),
        React.createElement("path", { d: "M57 164.1V61.2c0-.7.3-1.1 1-1.1 1.7 0 3.3 0 5.6-.1 2.4-.1 4.9-.1 7.6-.2 2.7-.1 5.6-.1 8.7-.2 3.1-.1 6.1-.1 9.1-.1 8.2 0 15 1 20.6 3.1 5 1.7 9.6 4.5 13.4 8.2 3.2 3.2 5.7 7.1 7.3 11.4 1.5 4.2 2.3 8.5 2.3 13 0 8.6-2 15.7-6 21.3-4 5.6-9.6 9.8-16.1 12.2-6.8 2.5-14.3 3.4-22.5 3.4-2.4 0-4 0-5-.1s-2.4-.1-4.3-.1V164c.1.7-.4 1.3-1.1 1.4H58.2c-.8 0-1.2-.4-1.2-1.3Zm21.8-84.7V113c1.4.1 2.7.2 3.9.2H88c3.9 0 7.8-.6 11.5-1.8 3.2-.9 6-2.8 8.2-5.3 2.1-2.5 3.1-5.9 3.1-10.3.1-3.1-.7-6.2-2.3-8.9-1.7-2.6-4.1-4.6-7-5.7-3.7-1.5-7.7-2.1-11.8-2-2.6 0-4.9 0-6.8.1-2-.1-3.4 0-4.1.1Zm67.8 5.8h17.5c1 0 1.8.7 2.1 1.6.3.8.5 1.6.6 2.5.2 1 .4 2.1.5 3.1.1 1.1.2 2.3.2 3.6 3-3.5 6.6-6.4 10.7-8.6 4.6-2.6 9.9-3.9 15.2-3.9.7-.1 1.3.4 1.4 1.1v19.9c0 .8-.5 1.1-1.6 1.1-3.6-.1-7.3.2-10.8 1-2.9.6-5.7 1.5-8.4 2.7-1.9.9-3.7 2.1-5.1 3.7v51c0 1-.4 1.4-1.3 1.4h-19.7c-.8.1-1.5-.4-1.6-1.2v-55.8c0-2.4 0-4.9-.1-7.5-.1-2.6-.1-5.2-.2-7.8 0-2.3-.2-4.5-.4-6.8-.1-.5.2-1 .7-1.1 0-.1.2-.1.3 0Z", style: {
                fill: '#99f',
                fillRule: 'nonzero',
            }, transform: "translate(18.802 31.132) scale(4.10998)" })));
};
export default SvgPremiere;