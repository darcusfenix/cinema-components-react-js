import React, {PropTypes} from "react";
import Dialog from "material-ui/Dialog";
import Spinner from "./Spinner";
import FlatButton from "material-ui/FlatButton";

const Modal = (props) => {

    const {
        title,
        handleOnTouchTapCancel,
        handleOnTouchTapOk,
        actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={handleOnTouchTapCancel}
            />,
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={handleOnTouchTapOk}
            />
        ],
        open,
        showSpinner = false
    } = props;

    return (
        <Dialog
            title={title}
            actions={actions}
            modal={true}
            autoScrollBodyContent={true}
            open={open}>

            {props.children}

            {
                showSpinner && <Spinner visible={showSpinner}/>
            }
        </Dialog>
    );

};

Modal.propTypes = {
    "title": PropTypes.string.isRequired,
    "handleOnTouchTapCancel": PropTypes.func.isRequired,
    "handleOnTouchTapOk": PropTypes.func.isRequired,
    "actions": PropTypes.array,
    "open": PropTypes.bool.isRequired,
    "showSpinner": PropTypes.bool,
    "children": PropTypes.node
};

export default Modal;
