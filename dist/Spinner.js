"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spinner = function spinner(props) {
    var _props$visible = props.visible,
        visible = _props$visible === undefined ? false : _props$visible,
        style = { "display": "none" };


    if (visible) {

        style.display = "block";
    }

    return _react2.default.createElement(
        "div",
        { className: "crisostomo-spinner-container", style: style },
        _react2.default.createElement(
            "div",
            { className: "crisostomo-spinner" },
            _react2.default.createElement("div", { className: "bounce1" }),
            _react2.default.createElement("div", { className: "bounce2" }),
            _react2.default.createElement("div", { className: "bounce3" })
        )
    );
};

spinner.propTypes = {
    "visible": _react.PropTypes.bool
};

exports.default = spinner;