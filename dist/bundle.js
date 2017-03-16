"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Drawer = require("material-ui/Drawer");

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Divider = require("material-ui/Divider");

var _Divider2 = _interopRequireDefault(_Divider);

var _List = require("material-ui/List");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description Componente que nos ayudará a pintar el menú, vertical-izquierdo
 * @param {boolean} drawerState : Bandera útil para mostrar u ocultar el Drawer
 * @param {func} onRequestChange : Función que se ejecuta cuando hay click en la parte oscura
 * @param {string} logoHeader : ruta de la imagen que se pintará en el header del drawer
 * @param {string} logoFooter : ruta de la imagen que se pintará en el footer del drawer
 * @param {[]} listItems : Array de opciones a pintar en el menú/drawer
 * @return {XML} : Componente Drawer sin estado
 */
var drawer = function drawer(_ref) {
    var drawerState = _ref.drawerState,
        onRequestChange = _ref.onRequestChange,
        logoHeader = _ref.logoHeader,
        logoFooter = _ref.logoFooter,
        listItems = _ref.listItems;


    var draweritems = listItems.map(function (item) {

        var sub = function sub(subItems) {
            var array = [];
            subItems && subItems.length && subItems.map(function (subItem) {
                array.push(_react2.default.createElement(_List.ListItem, { key: subItem.key,
                    primaryText: subItem.primaryText,
                    leftIcon: subItem.leftIcon }));
            });
            return array;
        };

        return _react2.default.createElement(_List.ListItem, { key: item.key,
            primaryText: item.primaryText,
            leftIcon: item.leftIcon,
            nestedItems: sub(item.nestedItems)
        });
    });

    return _react2.default.createElement(
        _Drawer2.default,
        {
            docked: false,
            open: drawerState,
            onRequestChange: onRequestChange },
        _react2.default.createElement(
            "div",
            { className: "text-center" },
            _react2.default.createElement("img", { src: logoHeader, alt: "m\xE1s n\xF3mina" })
        ),
        draweritems,
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement("img", {
            src: logoFooter,
            className: "mn-img-drawer-footer",
            alt: "sif" })
    );
};

drawer.propTypes = {
    drawerState: _react2.default.PropTypes.bool.isRequired,
    onRequestChange: _react2.default.PropTypes.func.isRequired,
    logoHeader: _react2.default.PropTypes.string.isRequired,
    logoFooter: _react2.default.PropTypes.string.isRequired,
    listItems: _react2.default.PropTypes.array.isRequired
};

exports.default = drawer;
