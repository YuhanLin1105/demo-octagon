import React from 'react';

import classes from './NavItems.css';
import Navitem from './NavItem/NavItem';
import * as pageName from '../../../constant/pageName';

const NavItems = (props) => {
    let styles = [classes.NavItems];

    if (props.col) {
        styles.push(classes.col);
    } else {
        styles.push(classes.row);
    }

    const navConfig = [
        {
            id: pageName.PAGE_LANDING,
            text: "Home",
            clicked: props.pageChange ? props.pageChange : () => null
        },
        {
            id: pageName.PAGE_CONTACT,
            text: "Contact us",
            clicked: props.pageChange ? props.pageChange : () => null
        },
    ]

    const _navItems = navConfig.map(item => {
        // console.log(item.clicked);
        return (
            <Navitem
                key={item.id}
                id={item.id}
                clicked={item.clicked}>
                {item.text}
            </Navitem>
        )
    })

    return (
        <ul className={styles.join(' ')}>
            {_navItems}
        </ul>
    );
};

export default NavItems;