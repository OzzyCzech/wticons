function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgGitter = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 128 128"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M96.8 25.6H107v51.2H96.8zm-25.6 0h10.2V128H71.2zm-25.6 0h10.2V128H45.6zM20 0h10.2v76.8H20z"
}));
export default SvgGitter;