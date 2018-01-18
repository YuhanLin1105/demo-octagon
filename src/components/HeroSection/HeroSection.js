import React from 'react';

import classes from './HeroSection.css'
import poster from '../../assets/images/doosan_poster.png';
import Button from '../UI/Button/Button';
const HeroSection = (props) => {
    const text = {
        Heading: " building your tomorrow ",
        Hightlight: "today",
        Button: "watch video"
    }


    let section = null;

    if (props.isPlay) {
        section = (
            <div className={classes.bgClickedVideo}>
                <span 
                    className={classes.bgCancel}
                    onClick={props.btnCancelClicked} >X</span>
                <video
                    className={classes.bgVideoContent}
                    autoPlay
                    controls
                    id="video-clicked"
                    poster={poster}
                    onEnded={props.btnCancelClicked} >
                    <source
                        src="https://s3-us-west-2.amazonaws.com/doosan-microsite/doosan_hero_video.mp4"
                        typeof="video/mp4" />
                    <source
                        src="https://s3-us-west-2.amazonaws.com/doosan-microsite/doosan_hero_video.mp4"
                        typeof="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </div>

        )
    } else {
        section = (
            <div className={classes.Container}>
                <div className={classes.bgVideo}>
                    <video
                        className={classes.bgVideoContent}
                        autoPlay
                        loop muted
                        id="video-bg"
                        poster={poster}>
                        <source
                            src="https://s3-us-west-2.amazonaws.com/doosan-microsite/doosan_hero_video.mp4"
                            typeof="video/mp4" />
                        <source
                            src="https://s3-us-west-2.amazonaws.com/doosan-microsite/doosan_hero_video.mp4"
                            typeof="video/ogg" />
                        Your browser does not support the video tag.
                </video>
                </div>


                <div className={classes.HeadingBox}>
                    <p className={classes.Heading}>
                        {text.Heading}
                        <span className={classes.Hightlight}>
                            {text.Hightlight}
                        </span>
                    </p>
                    <Button clicked={props.btnVideoClicked} type="btnVideo">{text.Button}</Button>
                </div>
            </div>
        );

    }


    return section;

}

export default HeroSection;