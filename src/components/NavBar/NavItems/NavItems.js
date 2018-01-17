import React from 'react';

import classes from './NavItems.css'
import Navitem from './NavItem/NavItem';

const NavItems = (props) =>{
    let styles=[classes.NavItems];

    if(props.col){
        styles.push(classes.col);
    }else {
        styles.push(classes.row);
    }


    return(
        <ul className={styles.join(' ')}>
            <Navitem>Our partnership</Navitem>
            <Navitem>Our profile</Navitem>
        </ul>
    );
};

export default NavItems;