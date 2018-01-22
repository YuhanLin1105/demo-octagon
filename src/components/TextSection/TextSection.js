import React from 'react';

import classes from './TextSection.css';
import spriteSVG from '../../assets/images/sprite.svg';

const textSection = () => {
    const text = {
        heading: "MLB ",
        hightlight: "PARTNERSHIP",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
    }

    return (

        <section className={classes.Section}>
            <div className={classes.Container}>
                <div className={classes.TextContent}>
                    <div className={classes.Heading}>
                        {text.heading}
                        <span className={classes.Highlight}>
                            {text.hightlight}
                        </span>
                    </div>
                    <div className={classes.Detail}>
                        {text.detail}
                    </div>
                </div>
                <div className={classes.ImgContent}>
                    <svg className={classes.Img}>
                        <use xlinkHref={spriteSVG + "#doosan-logo-2"}></use>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default textSection;