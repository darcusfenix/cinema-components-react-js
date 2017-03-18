"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Card = require("material-ui/Card");

var _IconButton = require("material-ui/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _modeEdit = require("material-ui/svg-icons/editor/mode-edit");

var _modeEdit2 = _interopRequireDefault(_modeEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Porlet = function Porlet(props) {
    var title = props.title,
        subtitle = props.subtitle,
        actAsExpander = props.actAsExpander,
        showExpandableButton = props.showExpandableButton,
        expandable = props.expandable;


    var items = [{
        "primaryText": "Editar",
        "leftIcon": _react2.default.createElement(_modeEdit2.default, null)
    }];

    return _react2.default.createElement(
        _Card.Card,
        { className: "static-info" },
        _react2.default.createElement(_Card.CardHeader, {
            className: "text-uppercase",
            title: title,
            subtitle: subtitle,
            actAsExpander: actAsExpander,

            showExpandableButton: showExpandableButton }),
        _react2.default.createElement(
            _Card.CardText,
            { expandable: expandable },
            props.children
        ),
        _react2.default.createElement(
            _Card.CardActions,
            { style: { textAlign: "right" } },
            _react2.default.createElement(
                _IconButton2.default,
                { tooltip: "SVG Icon" },
                _react2.default.createElement(_modeEdit2.default, null)
            )
        )
    );
};

Porlet.propTypes = {
    title: _react2.default.PropTypes.string.isRequired,
    subtitle: _react2.default.PropTypes.string,
    actAsExpander: _react2.default.PropTypes.bool,
    showExpandableButton: _react2.default.PropTypes.bool,
    expandable: _react2.default.PropTypes.bool
};

exports.default = Porlet;

/**
 <MenuItem
 primaryText="Copy & Paste"
 rightIcon={<ArrowDropRight />}
 menuItems={[
                    <MenuItem primaryText="Cut"/>,
                    <MenuItem primaryText="Copy"/>,
                    <Divider />,
                    <MenuItem primaryText="Paste"/>,
                ]}
 />

 <MenuItem
 primaryText="Case Tools"
 rightIcon={<ArrowDropRight />}
 menuItems={[
                    <MenuItem primaryText="UPPERCASE"/>,
                    <MenuItem primaryText="lowercase"/>,
                    <MenuItem primaryText="CamelCase"/>,
                    <MenuItem primaryText="Propercase"/>,
                ]}
 />
 <Divider />
 <MenuItem primaryText="Download" leftIcon={<Download />}/>
 <Divider />
 <MenuItem value="Del" primaryText="Delete"/>
 **/