import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerSimpleExample extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
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
    }
}