import React, {PropTypes, Component} from "react";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import {List, ListItem} from "material-ui/List";

/**
 * @description Componente que nos ayudará a pintar el menú, vertical-izquierdo
 * @param {boolean} open : Bandera útil para mostrar u ocultar el Drawer
 * @param {func} onRequestChange : Función que se ejecuta cuando hay click en la parte oscura
 * @param {func} onTouchTap: Función que se ejecuta cuando hay click en cada elemento del menú
 * @param {string} logoHeader : ruta de la imagen que se pintará en el header del drawer
 * @param {string} logoFooter : ruta de la imagen que se pintará en el footer del drawer
 * @param {[]} listItems : Array de opciones a pintar en el menú/drawer
 * @return {XML} : Componente Drawer sin estado
 */
const drawer = ({open, onRequestChange, onTouchTap, logoHeader, logoFooter, listItems}) => {

    let items = [];

    const buildItems = (list) => {

        return list && list.length && list.map((item) => {

                return (<ListItem key={item.key}
                                  primaryText={item.primaryText}
                                  leftIcon={item.leftIcon}
                                  onTouchTap={() => {
                                      onTouchTap(item.link);
                                  }}
                                  nestedItems={buildItems(item.nestedItems)}
                />);

            });

    };

    items = buildItems(listItems);

    return (
        <Drawer
            docked={false}
            open={open}
            onRequestChange={onRequestChange}>

            {
                logoHeader && <div className="mn-img-drawer-header">
                    <img src={logoHeader} alt="más nómina"/>
                </div>
            }

            {items}

            <Divider />

            {
                logoFooter && <div className="mn-img-drawer-footer">
                    <img src={logoFooter} alt="sif"/>
                </div>
            }

        </Drawer>
    );

};

drawer.propTypes = {
    open: React.PropTypes.bool.isRequired,
    onRequestChange: React.PropTypes.func.isRequired,
    onTouchTap: React.PropTypes.func.isRequired,
    logoHeader: React.PropTypes.string.isRequired,
    logoFooter: React.PropTypes.string.isRequired,
    listItems: React.PropTypes.array.isRequired,
};

export default drawer;
