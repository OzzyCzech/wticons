import * as React from "react";
const SvgCursor = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", style: {
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
    }, viewBox: "0 0 512 512", ...props },
    React.createElement("path", { d: "M5400 18360h512v512h-512z", style: {
            fill: "none",
        }, transform: "translate(-5400 -18360)" }),
    React.createElement("path", { d: "M240 0h32c72 0 113.52 0 148.56 9.36 44.4 11.76 70.32 37.68 82.08 82.08C512 126.48 512 168 512 240v32c0 72 0 113.52-9.36 148.56-11.76 44.4-37.68 70.32-82.08 82.08C385.52 512 344 512 272 512h-32c-72 0-113.52 0-148.56-9.36-44.4-11.76-70.32-37.68-82.08-82.08C0 385.52 0 344 0 272v-32c0-72 0-113.52 9.36-148.56 11.76-44.4 37.68-70.32 82.08-82.08C126.48 0 168 0 240 0", style: {
            fill: "#050505",
            fillRule: "nonzero",
        } }),
    React.createElement("path", { d: "M0 83.5 150 0v83.5z", style: {
            fill: "url(#cursor_svg__a)",
            fillRule: "nonzero",
        }, transform: "translate(94.323 76)scale(1.07784)" }),
    React.createElement("path", { d: "m150 0 150 83.5H150z", style: {
            fill: "url(#cursor_svg__b)",
            fillRule: "nonzero",
        }, transform: "translate(94.323 76)scale(1.07784)" }),
    React.createElement("path", { d: "M0 83.5 150 167v167L0 250.5z", style: {
            fill: "url(#cursor_svg__c)",
            fillRule: "nonzero",
        }, transform: "translate(94.323 76)scale(1.07784)" }),
    React.createElement("path", { d: "M0 250.5 150 167v167z", style: {
            fill: "url(#cursor_svg__d)",
            fillRule: "nonzero",
        }, transform: "translate(94.323 76)scale(1.07784)" }),
    React.createElement("path", { d: "M300 83.5v167L150 334V167z", style: {
            fill: "url(#cursor_svg__e)",
            fillRule: "nonzero",
        }, transform: "translate(94.323 76)scale(1.07784)" }),
    React.createElement("path", { d: "M0 83.5h300L150 167z", style: {
            fill: "#fff",
            fillRule: "nonzero",
        }, transform: "translate(94.323 76)scale(1.07784)" }),
    React.createElement("path", { d: "M300 83.5 150 334V167z", style: {
            fill: "#e5e5e5",
            fillRule: "nonzero",
        }, transform: "translate(94.323 76)scale(1.07784)" }),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "cursor_svg__a", x1: 0, x2: 1, y1: 0, y2: 0, gradientTransform: "matrix(150 -83.5 83.5 150 0 83.5)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#c8c8c8",
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#777",
                    stopOpacity: 1,
                } })),
        React.createElement("linearGradient", { id: "cursor_svg__b", x1: 0, x2: 1, y1: 0, y2: 0, gradientTransform: "matrix(150 83.5 -83.5 150 150 0)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#555",
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#050505",
                    stopOpacity: 1,
                } })),
        React.createElement("linearGradient", { id: "cursor_svg__c", x1: 0, x2: 1, y1: 0, y2: 0, gradientTransform: "matrix(150 166.5 -166.5 150 0 83.5)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#606060",
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#303030",
                    stopOpacity: 1,
                } })),
        React.createElement("linearGradient", { id: "cursor_svg__d", x1: 0, x2: 1, y1: 0, y2: 0, gradientTransform: "matrix(120 104 -104 120 30 230)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#696969",
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 0.6, style: {
                    stopColor: "#b7b7b7",
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#e8e8e8",
                    stopOpacity: 1,
                } })),
        React.createElement("linearGradient", { id: "cursor_svg__e", x1: 0, x2: 1, y1: 0, y2: 0, gradientTransform: "matrix(-70 186.5 -186.5 -70 300 83.5)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#555",
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 0.55, style: {
                    stopColor: "#050505",
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#b4b4b4",
                    stopOpacity: 1,
                } })))));
export default SvgCursor;
