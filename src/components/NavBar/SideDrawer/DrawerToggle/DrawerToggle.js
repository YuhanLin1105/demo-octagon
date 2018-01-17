import React from 'react';

import classes from './DrawerToggle.css'
import spriteSVG from '../../../../assets/images/sprite.svg'

const drawerToggle = (props) => {

    let Icon = props.isOpen
        ? (<svg className={classes.Icon}>
            <use xlinkHref={spriteSVG + "#icon-cross"}></use>
        </svg>)
        : (<svg className={classes.Icon}>
            <use xlinkHref={spriteSVG + "#icon-menu"}></use>
        </svg>)


    return (
        <button className={classes.Button} onClick={props.clicked}>
            {Icon}
        </button>
    );
};

export default drawerToggle;