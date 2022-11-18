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
var SvgWordpress = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", style: {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: 2,
        }, viewBox: "0 0 256 255", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M18.124 127.5c0 43.296 25.161 80.711 61.646 98.442L27.594 82.986a108.962 108.962 0 0 0-9.47 44.514Zm183.221-5.519c0-13.518-4.856-22.88-9.02-30.166-5.545-9.01-10.742-16.64-10.742-25.65 0-10.055 7.626-19.415 18.368-19.415.485 0 .944.061 1.417.088-19.46-17.829-45.387-28.714-73.863-28.714-38.213 0-71.832 19.606-91.39 49.302 2.566.077 4.984.131 7.039.131 11.441 0 29.15-1.388 29.15-1.388 5.897-.348 6.592 8.312.702 9.01 0 0-5.926.697-12.519 1.042l39.832 118.478 23.937-71.79-17.042-46.692a199.176 199.176 0 0 1-11.47-1.042c-5.894-.346-5.203-9.358.691-9.01 0 0 18.064 1.388 28.811 1.388 11.439 0 29.151-1.388 29.151-1.388 5.901-.348 6.594 8.312.702 9.01 0 0-5.938.697-12.519 1.042l39.528 117.581 10.91-36.458c4.728-15.129 8.327-25.995 8.327-35.359Zm-71.921 15.087-32.818 95.363a109.352 109.352 0 0 0 30.899 4.456c12.737 0 24.952-2.202 36.323-6.2a9.596 9.596 0 0 1-.779-1.507l-33.625-92.112Zm94.058-62.045a83.98 83.98 0 0 1 .737 11.247c0 11.099-2.073 23.577-8.317 39.178l-33.411 96.6c32.518-18.963 54.39-54.193 54.39-94.545.002-19.017-4.856-36.9-13.399-52.48ZM127.505 0C57.2 0 0 57.196 0 127.5c0 70.313 57.2 127.507 127.505 127.507 70.302 0 127.511-57.194 127.511-127.507C255.013 57.196 197.807 0 127.505 0Zm0 249.163c-67.081 0-121.659-54.578-121.659-121.663 0-67.08 54.576-121.654 121.659-121.654 67.078 0 121.652 54.574 121.652 121.654 0 67.085-54.574 121.663-121.652 121.663Z", style: {
                fill: '#464342',
                fillRule: 'nonzero',
            }, transform: "matrix(.973 0 0 .973 3.936 3.44)" })));
};
export default SvgWordpress;
