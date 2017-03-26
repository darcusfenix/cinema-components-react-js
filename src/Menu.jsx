import React, {PropTypes} from "react";
import Drawer from "material-ui/Drawer";
import {ListItem} from "material-ui/List";
import UserIcon from "material-ui/svg-icons/action/account-circle";
import config from "./config";

const Menu = (props) => {

    let items = [];
    const {
            open, onRequestChange, onTouchTap, listItems
        } = props,
        buildItems = (list) => {

            return list && list.length && list.map((item, i) => {

                    return <ListItem key={`menu-li-${i}`}
                                     primaryText={item.primaryText}
                                     leftIcon={item.leftIcon && item.leftIcon}
                                     rightIcon={item.rightIcon &&
                                     item.rightIcon}
                                     onTouchTap={() => {

                                         onTouchTap(item.link);

                                     }}
                                     nestedItems={
                                         buildItems(item.nestedItems)
                                     }/>;

                });

        };

    items = buildItems(listItems);

    return <Drawer
        docked={false}
        open={open}
        width={280}
        onRequestChange={onRequestChange}>

        <div className="crisostomo-drawer-header"
             style={{"backgroundColor": config.palette.primary1Color}}>
            <UserIcon style={{
                "width": "56px",
                "height": "56px",
                "margin": "0px",
                "marginLeft": "16px",
                "color": config.palette.alternateTextColor
            }}/>
            <div className="crisostomo-drawer-info">
                <ul>
                    <li className="name"> Juan Crisóstomo Vázquez
                    </li>
                    <li>
                        juancvfenix@gmail.com
                    </li>
                </ul>
            </div>
        </div>

        {items}

    </Drawer>;

};

Menu.propTypes = {
    "open": PropTypes.bool.isRequired,
    "onRequestChange": PropTypes.func.isRequired,
    "onTouchTap": PropTypes.func.isRequired,
    "listItems": PropTypes.array.isRequired
};

export default Menu;
