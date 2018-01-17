import React from 'react';

import classes from './NavItems.css'
import Navitem from './NavItem/NavItem';

const NavItems = (props) =>{
    let styles=[classes.NavItems];

    if(props.col){
        styles.push(classes.Row);
    }else {
        styles.push(classes.Col);
    }

    styles = styles.join(' ');

    return(
        <ul className={styles}>
            <Navitem>Our partnership</Navitem>
            <Navitem>Our profile</Navitem>
        </ul>
    );
};

export default NavItems;