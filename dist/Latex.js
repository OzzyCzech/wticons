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
var SvgLatex = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M29.2 63H28c-.5 5.1-1.2 11.3-10 11.3h-4c-2.3 0-2.4-.3-2.4-2V45.8c0-1.7 0-2.4 4.7-2.4h1.6v-1.5c-1.9.1-6.3.1-8.4.1-1.9 0-5.8 0-7.5-.1v1.5h1.1c3.8 0 3.9.5 3.9 2.3v26.1c0 1.8-.1 2.3-3.9 2.3H2v1.5h25.8L29.2 63z" }),
        React.createElement("path", { d: "M28.3 41.8c-.2-.6-.3-.8-.9-.8s-.8.2-1 .8l-8 20.3c-.3.8-.9 2.4-4 2.4v1.2h7.7v-1.2c-1.5 0-2.5-.7-2.5-1.7 0-.2 0-.3.1-.7l1.7-4.3h9.9l2 5.1c.1.2.2.4.2.6 0 1-1.9 1-2.8 1v1.2h9.8v-1.2h-.7c-2.3 0-2.6-.3-2.9-1.3l-8.6-21.4zm-1.9 3.6 4.4 11.3h-8.9l4.5-11.3z" }),
        React.createElement("path", { d: "M68.2 42.2H37.9L37 53.3h1.2c.7-8 1.4-9.7 9-9.7.9 0 2.2 0 2.7.1 1 .2 1 .7 1 1.9v26.1c0 1.7 0 2.4-5.2 2.4h-2v1.5c2-.1 7.1-.1 9.4-.1s7.4 0 9.5.1v-1.5h-2c-5.2 0-5.2-.7-5.2-2.4v-26c0-1 0-1.7.9-1.9.5-.1 1.9-.1 2.8-.1 7.5 0 8.2 1.6 8.9 9.7h1.2l-1-11.2z" }),
        React.createElement("path", { d: "M94.9 74.2h-1.2c-1.2 7.6-2.4 11.3-10.9 11.3h-6.6c-2.3 0-2.4-.3-2.4-2V70.2h4.4c4.8 0 5.4 1.6 5.4 5.8h1.2V62.9h-1.2c0 4.2-.5 5.8-5.4 5.8h-4.4v-12c0-1.6.1-2 2.4-2h6.4c7.6 0 8.9 2.7 9.7 9.7h1.2l-1.4-11.2H64.2v1.5h1.1c3.8 0 3.9.5 3.9 2.3v26c0 1.8-.1 2.3-3.9 2.3h-1.1V87h28.6l2.1-12.8z" }),
        React.createElement("path", { d: "m109.9 56.6 6.8-10c1-1.6 2.7-3.2 7.2-3.2v-1.5H112v1.5c2 0 3.1 1.1 3.1 2.3 0 .5-.1.6-.4 1.1l-5.7 8.4-6.4-9.6c-.1-.1-.3-.5-.3-.7 0-.6 1.1-1.4 3.2-1.5v-1.5c-1.7.1-5.3.1-7.2.1-1.5 0-4.6 0-6.5-.1v1.5h.9c2.7 0 3.7.3 4.6 1.7l9.1 13.8-8.1 12c-.7 1-2.2 3.3-7.2 3.3v1.5H103v-1.5c-2.3 0-3.1-1.4-3.1-2.3 0-.4.1-.6.5-1.2l7-10.4 7.9 11.9c.1.2.2.4.2.5 0 .6-1.1 1.4-3.2 1.5v1.5c1.7-.1 5.4-.1 7.2-.1 2.1 0 4.4 0 6.5.1v-1.5h-.9c-2.6 0-3.6-.2-4.7-1.8l-10.5-15.8z" })));
};
export default SvgLatex;
