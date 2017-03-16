import React, {PropTypes} from "react";
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";

const Body = (props) => {

    const {title} = props;

    return (

        <Paper className="nm-paper-body mn-pd-30" zDepth={1}>
            {
                title && <div>
                    <h1>{title}</h1>
                    <Divider />
                </div>
            }

            <div className="mn-pd-30">
                {props.children}
            </div>

        </Paper>

    );
};

Body.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element
};

export default Body;
