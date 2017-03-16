import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const DrawerSimpleExample = ({label, handleToggle, open}) => (
    <div>
        <RaisedButton
            label={this.props.label}
            onTouchTap={this.props.handleToggle}
        />
        <Drawer open={this.props.open}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
    </div>
);

export default DrawerSimpleExample;