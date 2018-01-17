import React from 'react';

import classes from './DrawerToggle.css'
import spriteSVG from '../../../../assets/images/sprite.svg'

const drawerToggle = (props) => {
    return (
        <button className={classes.Button}>
            <svg className={classes.Icon}>
                <use xlinkHref={spriteSVG + "#icon-menu"}></use>
            </svg>
        </button>
    );
};

export default drawerToggle;