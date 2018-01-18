import React from 'react';

import classes from './NavBar.css';
import Logo from '../Logo/Logo';
import NavItems from './NavItems/NavItems';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';

const navBar = (props) => {

    return (
        <div className={classes.NavBar}>
            <div className={classes.padLeft}>
                <Logo />
            </div>
            <DrawerToggle
                clicked={props.toggleClicked}
                isOpen={props.toggleIsOpen} />
            <nav className={[classes.padRight, classes.notSmSreen].join(' ')}>
                <NavItems />
            </nav>
        </div>
    );
};

export default navBar;