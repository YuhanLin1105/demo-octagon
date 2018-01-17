import React from 'react';
import NavItems from '../NavItems/NavItems';
import classes from './SideDrawer.css';


const sideDrawer = (props) => {
    let styles = [classes.SideDrawer, classes.Close];
    if (props.isOpen) {
        styles = [classes.SideDrawer, classes.Open];
    }

    return (
        <React.Fragment>
            <div className={styles.join(' ')}>
                <nav className={classes.Nav}>
                    <NavItems col />
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;