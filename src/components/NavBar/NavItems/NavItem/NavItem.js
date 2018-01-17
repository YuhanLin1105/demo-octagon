import React from 'react';

import classes from './NavItem.css';

const NavItem = (props) => {
    return (
        <li>
            <a className={classes.NavItem} href="#">{props.children}</a>
        </li>
    );
};

export default NavItem;