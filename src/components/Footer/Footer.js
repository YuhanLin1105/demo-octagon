import React from 'react';

import classes from './Footer.css';
import footerLogo from '../../assets/images/logoFooter.png';

const Footer = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.ImageLink}>
                <a href="#" className={classes.btnLogo}>
                    <img className={classes.btnLogImage} src={footerLogo} alt="Footer Logo" />
                </a>
                <a href="#" className={classes.btnYoutube} title="Site Link (View a new window)">YOUTUBE</a>
                <a href="#" className={classes.btnRss} title="RSS">RSS</a>
            </div>
            <div className={classes.TextLink}>
                <a>
                    ContactUs
                </a>
                <span> | </span>
                <a >
                    Legal Notice
                </a>
                <span> | </span>
                <a>
                    Terms of Use
                </a>
                <span> | </span>

                <a className={classes.TextLinkPrivate}>
                    Privacy and information Processing Policy, etc.
                </a>
                <p>© 2017 Doosan Corporation</p>
                <p>Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;