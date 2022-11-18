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
var SvgDynamodb = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", style: {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: 2,
        }, viewBox: "0 0 256 289", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M165.258 288.501h3.508l57.261-28.634.953-1.347V29.964l-.953-1.354L168.766 0h-3.551l.043 288.501", style: {
                fill: '#5294cf',
                fillRule: 'nonzero',
            }, transform: "translate(4.95 5.828) scale(.96132)" }),
        React.createElement("path", { d: "M90.741 288.501h-3.557l-57.212-28.634-1.161-1.997-.589-226.742 1.75-2.518L87.184 0h3.601l-.044 288.501", style: {
                fill: '#1f5b98',
                fillRule: 'nonzero',
            }, transform: "translate(4.95 5.828) scale(.96132)" }),
        React.createElement("path", { d: "M87.285 0h81.426v288.501H87.285z", style: {
                fill: '#2d72b8',
                fillRule: 'nonzero',
            }, transform: "translate(4.95 5.828) scale(.96132)" }),
        React.createElement("path", { d: "m256 137.769-1.935-.429-27.628-2.576-.41.204-57.312-2.292h-81.43l-57.313 2.292V91.264l-.06.032.06-.128 57.313-13.28h81.43l57.312 13.28 21.069 11.199v-7.2l8.904-.974-.922-1.798-28.192-20.159-.859.279-57.312-17.759h-81.43L29.972 72.515V28.61L0 63.723v30.666l.232-.168 8.672.946v7.348L0 107.28v30.513l.232-.024 8.672.128v12.807l-7.482.112L0 150.68v30.525l8.904 4.788v7.433l-8.531.942-.373-.28v30.661l29.972 35.118v-43.901l57.313 17.759h81.43l57.481-17.811.764.335 27.821-19.862 1.219-1.979-8.904-.982v-7.284l-1.167-.466-19.043 10.265-.69 1.44-57.481 13.203v.016h-81.43v-.016l-57.313-13.259v-43.864l57.313 2.284v.056h81.43l57.312-2.34 1.305.6 26.779-2.306 1.889-.923-8.904-.128v-12.807l8.904-.128", style: {
                fill: '#1a476f',
                fillRule: 'nonzero',
            }, transform: "translate(4.95 5.828) scale(.96132)" }),
        React.createElement("path", { d: "M226.027 215.966v43.901L256 224.749v-30.461l-29.8 21.626-.173.052m0-18.545.173-.04 29.8-16.028v-30.649l-29.973 2.757v43.96m.173-106.213-.173-.04v43.8L256 137.769v-30.634l-29.8-15.927m0-18.521L256 94.193V63.731L226.027 28.61v43.905l.173.06v.112", style: {
                fill: '#2d72b8',
                fillRule: 'nonzero',
            }, transform: "translate(4.95 5.828) scale(.96132)" })));
};
export default SvgDynamodb;