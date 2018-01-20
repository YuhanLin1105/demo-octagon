import React from 'react';

import classes from './NavItem.css';

const NavItem = (props) => {
    return (
        <li>
            <a 
                id={props.id}
                className={classes.NavItem}
                onClick={()=>props.clicked(props.id)}>
                {props.children}
            </a>
        </li>
    );
};

export default NavItem;