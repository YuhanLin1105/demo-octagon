import React from 'react';

import classes from './Logo.css';
import spriteSVG from '../../assets/images/sprite.svg';

const logo = (props) => {
    return (
        <a href='#' className={classes.Link}>
            <svg className={classes.Logo}>
                <use xlinkHref={spriteSVG + "#doosan-logo-1"}></use>
            </svg>
        </a>
    );
};

export default logo;