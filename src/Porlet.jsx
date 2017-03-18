import React, {PropTypes} from "react";
import {Card, CardActions, CardHeader, CardText} from "material-ui/Card";
import IconButton from 'material-ui/IconButton';
import ModeEdit from "material-ui/svg-icons/editor/mode-edit";

const Porlet = (props) => {

    const {title, subtitle, actAsExpander, showExpandableButton, expandable} = props;

    const items = [
        {
            "primaryText": "Editar",
            "leftIcon": <ModeEdit />,
        }
    ];

    return (
        <Card className="static-info" >
            <CardHeader
                className="text-uppercase"
                title={title}
                subtitle={subtitle}
                actAsExpander={actAsExpander}

                showExpandableButton={showExpandableButton}/>
            <CardText expandable={expandable}>
                {props.children}
            </CardText>
            <CardActions style={{textAlign: "right"}}>
                <IconButton tooltip="SVG Icon">
                    <ModeEdit />
                </IconButton>
            </CardActions>

        </Card>
    );

};

Porlet.propTypes = {
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string,
    actAsExpander: React.PropTypes.bool,
    showExpandableButton: React.PropTypes.bool,
    expandable: React.PropTypes.bool
};

export default Porlet;

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
