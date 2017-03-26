"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Dialog = require("material-ui/Dialog");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Spinner = require("./Spinner");

var _Spinner2 = _interopRequireDefault(_Spinner);

var _FlatButton = require("material-ui/FlatButton");

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(props) {
    var title = props.title,
        handleOnTouchTapCancel = props.handleOnTouchTapCancel,
        handleOnTouchTapOk = props.handleOnTouchTapOk,
        _props$actions = props.actions,
        actions = _props$actions === undefined ? [_react2.default.createElement(_FlatButton2.default, {
        label: "Cancel",
        primary: true,
        onTouchTap: handleOnTouchTapCancel
    }), _react2.default.createElement(_FlatButton2.default, {
        label: "Ok",
        primary: true,
        onTouchTap: handleOnTouchTapOk
    })] : _props$actions,
        open = props.open,
        _props$showSpinner = props.showSpinner,
        showSpinner = _props$showSpinner === undefined ? false : _props$showSpinner;


    return _react2.default.createElement(
        _Dialog2.default,
        {
            title: title,
            actions: actions,
            modal: true,
            autoScrollBodyContent: true,
            open: open },
        props.children,
        showSpinner && _react2.default.createElement(_Spinner2.default, { visible: showSpinner })
    );
};

Modal.propTypes = {
    "title": _react.PropTypes.string.isRequired,
    "handleOnTouchTapCancel": _react.PropTypes.func.isRequired,
    "handleOnTouchTapOk": _react.PropTypes.func.isRequired,
    "actions": _react.PropTypes.array,
    "open": _react.PropTypes.bool.isRequired,
    "showSpinner": _react.PropTypes.bool,
    "children": _react.PropTypes.node
};

exports.default = Modal;