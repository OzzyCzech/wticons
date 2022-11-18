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
var SvgNpm = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", style: {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: 2,
        }, viewBox: "0 0 1024 1024", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M174.443 576.219V563.2h-64.872l.001-77.981h233.356V563.2H226.25v13.019h-51.807Z", style: {
                fill: '#cb3837',
                fillRule: 'nonzero',
            }, transform: "translate(-468.554 -1788.11) scale(4.33395)" }),
        React.createElement("path", { d: "M213.636 563.2v-13.109h25.678v-51.762h-51.717V563.2h26.039Z", style: {
                fill: '#fff',
                fillRule: 'nonzero',
            }, transform: "translate(-468.554 -1788.11) scale(4.33395)" }),
        React.createElement("path", { d: "M213.636 511.348h12.614v25.678h-12.614z", style: {
                fill: '#cb3837',
                fillRule: 'nonzero',
            }, transform: "translate(-468.554 -1788.11) scale(4.33395)" }),
        React.createElement("path", { d: "M148.314 550.091v-38.743h13.065v38.743h13.064v-51.762h-51.712v51.762h25.583Zm129.743 0v-38.743h13.064v38.743h13.064v-38.743h13.065v38.743h13.064v-51.762H252.38v51.762h25.677Z", style: {
                fill: '#fff',
                fillRule: 'nonzero',
            }, transform: "translate(-468.554 -1788.11) scale(4.33395)" })));
};
export default SvgNpm;
