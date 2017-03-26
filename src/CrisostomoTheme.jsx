import React, {PropTypes} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import config from "./config";

const CrisostomoTheme = (props) => {

    const {
            primary1Color = config.palette.primary1Color,
            accent1Color = config.palette.accent1Color
        } = props,
        cinema = getMuiTheme({
            "palette": {
                "primary1Color": primary1Color,
                "accent1Color": accent1Color
            }
        });


    return <MuiThemeProvider muiTheme={cinema}>
        {props.children}
    </MuiThemeProvider>;

};

CrisostomoTheme.propTypes = {
    "children": PropTypes.node,
    "primary1Color": PropTypes.string,
    "accent1Color": PropTypes.string
};

export default CrisostomoTheme;
