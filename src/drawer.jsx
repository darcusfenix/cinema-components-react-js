import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const DrawerSimpleExample = ({label, handleToggle, open}) => (
    <div>
        <RaisedButton
            label={label}
            onTouchTap={handleToggle}
        />
        <Drawer open={open}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
    </div>
);

export default DrawerSimpleExample;