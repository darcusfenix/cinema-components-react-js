"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Dialog = require("material-ui/Dialog");

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(_ref) {
    var title = _ref.title,
        body = _ref.body,
        actions = _ref.actions,
        open = _ref.open;


    return _react2.default.createElement(
        _Dialog2.default,
        {
            title: title,
            actions: actions,
            modal: true,
            open: open },
        body
    );
};

Modal.propTypes = {
    title: _react2.default.PropTypes.string.isRequired,
    body: _react2.default.PropTypes.node.isRequired,
    actions: _react2.default.PropTypes.array.isRequired,
    open: _react2.default.PropTypes.bool.isRequired
};

exports.default = Modal;