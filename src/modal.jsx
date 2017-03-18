import React, {PropTypes} from "react";
import Dialog from "material-ui/Dialog";

const Modal = ({title, body, actions, open}) => {


    return (
        <Dialog
            title={title}
            actions={actions}
            modal={true}
            open={open}>
            {body}
        </Dialog>
    );

};

Modal.propTypes = {
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.node.isRequired,
    actions: React.PropTypes.array.isRequired,
    open: React.PropTypes.bool.isRequired,
};

export default Modal;
