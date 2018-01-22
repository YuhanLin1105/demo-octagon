import React from 'react';

import classes from './NavBar.css';
import Logo from '../Logo/Logo';
import NavItems from './NavItems/NavItems';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';

const navBar = (props) => {

    return (
        <div className={classes.NavBar}>
            <a className={classes.Link} href="#1234">
                <Logo />
            </a>
            <DrawerToggle
                clicked={props.toggleClicked}
                isOpen={props.toggleIsOpen}
                pageChange={props.pageChange} />
            <nav className={classes.notSmSreen}>
                <NavItems pageChange={props.pageChange} />
            </nav>
        </div>
    );
};

export default navBar;