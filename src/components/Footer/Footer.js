import React from 'react';

import classes from './Footer.css';
import footerLogo from '../../assets/images/logoFooter.png';


const Footer = (props) => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.Container}>
                <div className={classes.ImageLink}>
                    <a target="_blank" href="http://www.doosan.com/en/" className={classes.btnLogo} rel="noopener noreferrer">
                        <img className={classes.btnLogImage} src={footerLogo} alt="Footer Logo" />
                    </a>
                    <a href="https://www.youtube.com/Doosan" target="_blank" className={classes.btnYoutube} title="Site Link (View a new window)" rel="noopener noreferrer">YOUTUBE</a>
                    <a href="http://www.doosan.com/rss_en.php" className={classes.btnRss} title="RSS">RSS</a>
                </div>
                <div className={classes.TextLink}>
                    <a target="_blank" href="http://www.doosan.com/en/contact-us/" rel="noopener noreferrer">
                        ContactUs
                </a>
                    <span> | </span>
                    <a target="_blank" href="http://www.doosan.com/en/legal/" rel="noopener noreferrer">
                        Legal Notice
                </a>
                    <span> | </span>
                    <a target="_blank" href="http://www.doosan.com/en/terms/" rel="noopener noreferrer">
                        Terms of Use
                </a>
                    <span> | </span>

                    <a target="_blank" href="http://www.doosan.com/en/privacy/" className={classes.TextLinkPrivate} rel="noopener noreferrer">
                        Privacy and information Processing Policy, etc.
                </a>
                    <p>© 2017 Doosan Corporation</p>
                    <p>Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.</p>
                </div>
            </div>
        </footer>

    );
}

export default Footer;