import React from 'react';

import classes from './NavBar.css';
import Logo from '../Logo/Logo';
import NavItems from './NavItems/NavItems';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';

const navBar = (props) => {
    let styles = [classes.NavBar];
    if (props.fixedTop) {
        styles.push(classes.fixedTop);
    }

    styles = styles.join(' ');
    return (
        <React.Fragment>
            <header className={styles}>
                <div className={classes.padLeft}>
                    <Logo />
                </div>
                <DrawerToggle />
                <nav className={[classes.padRight, classes.notSmSreen].join(' ')}>
                    <NavItems />
                </nav>
            </header>
        </React.Fragment>

    );
};

export default navBar;