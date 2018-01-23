import React from 'react';

import classes from './DrawerToggle.css';
import SideDrawer from '../SideDrawer';
import spriteSVG from '../../../../assets/images/sprite.svg';

const drawerToggle = (props) => {

    let iconCross=[classes.Icon];
    let iconMenu=[classes.Icon];

    if(props.isOpen){
        iconMenu.push(classes.Hide)
    }else{
        iconCross.push(classes.Hide)
    }

    return (
        <React.Fragment>
            <button className={classes.Button} onClick={props.clicked}>
                <svg className={iconCross.join(' ')}>
                    <use xlinkHref={spriteSVG + "#icon-cross"}></use>
                </svg>
                <svg className={iconMenu.join(' ')}>
                    <use xlinkHref={spriteSVG + "#icon-menu"}></use>
                </svg>
            </button>
            <SideDrawer
                isOpen={props.isOpen}
                pageChange={props.pageChange} />
        </React.Fragment>
    );
};

export default drawerToggle;