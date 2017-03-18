import React, {PropTypes} from "react";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

/**
 * Example of nested menus within an IconMenu.
 */
const IconMenuExampleNested = (props) => {

    const {anchorOrigin, targetOrigin, listOptions, rowId} = props;

    let items = [];

    const buildItems = (list) => {

        return list && list.length && list.map((item, i) => {

                return (
                    <MenuItem
                        key={`menu-${item}-${i}`}
                        primaryText={item.primaryText}
                        rightIcon={item.rightIcon && item.rightIcon}
                        leftIcon={item.leftIcon && item.leftIcon}
                        onTouchTap={() => {

                            item.onTouchTap(rowId);

                        }}
                        menuItems={buildItems(item.menuItems)}
                    />);

            });

    };

    items = buildItems(listOptions);


    return (
        <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: "left", vertical: "top"}}
            targetOrigin={{horizontal: "left", vertical: "top"}}>

            {items}

        </IconMenu>
    )
};


IconMenuExampleNested.propTypes = {
    listOptions: PropTypes.array.isRequired,
    rowId: PropTypes.string.isRequired,
};


export default IconMenuExampleNested;
