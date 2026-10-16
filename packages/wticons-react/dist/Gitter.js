import * as React from "react";
const SvgGitter = (props) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", style: {
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
    }, viewBox: "0 0 512 512", ...props },
    React.createElement("path", { d: "M5528 7328h512v512h-512z", style: {
            fill: "none",
        }, transform: "translate(-5528 -7328)" }),
    React.createElement("path", { d: "M120 0h16c36 0 56.76 0 74.28 4.68 22.2 5.88 35.16 18.84 41.04 41.04C256 63.24 256 84 256 120v16c0 36 0 56.76-4.68 74.28-5.88 22.2-18.84 35.16-41.04 41.04C192.76 256 172 256 136 256h-16c-36 0-56.76 0-74.28-4.68-22.2-5.88-35.16-18.84-41.04-41.04C0 192.76 0 172 0 136v-16c0-36 0-56.76 4.68-74.28 5.88-22.2 18.84-35.16 41.04-41.04C63.24 0 84 0 120 0", style: {
            fill: "url(#gitter_svg__a)",
            fillRule: "nonzero",
        }, transform: "scale(2)" }),
    React.createElement("path", { d: "M83.914 62.873h12.525v82.661H83.914zm76.149 20.039h12.524v62.622h-12.524zm-50.599 0h12.524v110.466h-12.524zm25.049 0h12.525v110.466h-12.525z", style: {
            fill: "#fff",
            fillRule: "nonzero",
        }, transform: "scale(2)" }),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "gitter_svg__a", x1: 0, x2: 1, y1: 0, y2: 0, gradientTransform: "rotate(90 64 64)scale(256)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, style: {
                    stopColor: "#fb0766",
                    stopOpacity: 1,
                } }),
            React.createElement("stop", { offset: 1, style: {
                    stopColor: "#c50948",
                    stopOpacity: 1,
                } })))));
export default SvgGitter;
