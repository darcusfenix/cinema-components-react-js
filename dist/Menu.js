"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Drawer = require("material-ui/Drawer");

var _Drawer2 = _interopRequireDefault(_Drawer);

var _List = require("material-ui/List");

var _accountCircle = require("material-ui/svg-icons/action/account-circle");

var _accountCircle2 = _interopRequireDefault(_accountCircle);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(props) {

    var items = [];

    var open = props.open,
        onRequestChange = props.onRequestChange,
        _onTouchTap = props.onTouchTap,
        listItems = props.listItems,
        buildItems = function buildItems(list) {

        return list && list.length && list.map(function (item, i) {

            return _react2.default.createElement(_List.ListItem, { key: "menu-li-" + i,
                primaryText: item.primaryText,
                leftIcon: item.leftIcon && item.leftIcon,
                rightIcon: item.rightIcon && item.rightIcon,
                onTouchTap: function onTouchTap() {

                    _onTouchTap(item.link);
                },
                nestedItems: buildItems(item.nestedItems) });
        });
    };

    items = buildItems(listItems);

    return _react2.default.createElement(
        _Drawer2.default,
        {
            docked: false,
            open: open,
            width: 280,
            onRequestChange: onRequestChange },
        _react2.default.createElement(
            "div",
            { className: "crisostomo-drawer-header",
                style: { "backgroundColor": _config2.default.palette.primary1Color } },
            _react2.default.createElement(_accountCircle2.default, { style: {
                    "width": "56px",
                    "height": "56px",
                    "margin": "0px",
                    "marginLeft": "16px",
                    "color": _config2.default.palette.alternateTextColor
                } }),
            _react2.default.createElement(
                "div",
                { className: "crisostomo-drawer-info" },
                _react2.default.createElement(
                    "ul",
                    null,
                    _react2.default.createElement(
                        "li",
                        { className: "name" },
                        " Juan Cris\xF3stomo V\xE1zquez"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "juancvfenix@gmail.com"
                    )
                )
            )
        ),
        items
    );
};

Menu.propTypes = {
    "open": _react.PropTypes.bool.isRequired,
    "onRequestChange": _react.PropTypes.func.isRequired,
    "onTouchTap": _react.PropTypes.func.isRequired,
    "listItems": _react.PropTypes.array.isRequired
};

exports.default = Menu;