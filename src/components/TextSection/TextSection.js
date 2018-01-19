import React from 'react';

import classes from './TextSection.css';
import spriteSVG from '../../assets/images/sprite.svg';

const textSection = () => {
    const text = {
        heading: "MLB ",
        hightlight: "PARTNERSHIP",
        detail: "Doosan, a global leader in the Infrastructure Support Business, is a proud partner of Major League Baseball and is the first brand in MLB history to be the Presenting Sponsor of the American League Division Series (ALDS). Through the MLB partnership, Doosan hopes to elevate brand awareness and showcase the company’s leading technologies and products to the US market."
    }

    return (
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
    );
};

export default textSection;