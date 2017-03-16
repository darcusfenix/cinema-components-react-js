import React, {PropTypes} from "react";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import {List, ListItem} from "material-ui/List";
/**
 * @description Componente que nos ayudará a pintar el menú, vertical-izquierdo
 * @param {boolean} drawerState : Bandera útil para mostrar u ocultar el Drawer
 * @param {func} onRequestChange : Función que se ejecuta cuando hay click en la parte oscura
 * @param {string} logoHeader : ruta de la imagen que se pintará en el header del drawer
 * @param {string} logoFooter : ruta de la imagen que se pintará en el footer del drawer
 * @param {[]} listItems : Array de opciones a pintar en el menú/drawer
 * @return {XML} : Componente Drawer sin estado
 */
const drawer = ({drawerState, onRequestChange, logoHeader, logoFooter, listItems}) => {

    const draweritems = listItems.map((item) => {

        const sub = (subItems) => {
            let array = [];
            subItems && subItems.length && subItems.map((subItem) => {
                array.push(<ListItem key={subItem.key}
                                     primaryText={subItem.primaryText}
                                     leftIcon={subItem.leftIcon}/>);
            });
            return array;
        };

        return (<ListItem key={item.key}
                          primaryText={item.primaryText}
                          leftIcon={item.leftIcon}
                          nestedItems={sub(item.nestedItems)}
        />);

    });

    return (
        <Drawer
            docked={false}
            open={drawerState}
            onRequestChange={onRequestChange}>

            <div className="text-center">
                <img src={logoHeader} alt="más nómina"/>
            </div>

            {draweritems}

            <Divider />

            <img
                src={logoFooter}
                className="mn-img-drawer-footer"
                alt="sif"/>

        </Drawer>
    );

};

drawer.propTypes = {
    drawerState: React.PropTypes.bool.isRequired,
    onRequestChange: React.PropTypes.func.isRequired,
    logoHeader: React.PropTypes.string.isRequired,
    logoFooter: React.PropTypes.string.isRequired,
    listItems: React.PropTypes.array.isRequired,
};

export default drawer;
