import React, {Component} from 'react';

import classes from './HeroSection.css'
import poster from '../../assets/images/doosan_poster.png';
import Button from '../UI/Button/Button';

class HeroSection extends Component {
    
    state={
        text:{
            Heading: " building your tomorrow ",
            Hightlight: "today",
            Button: "watch video"
        },
        isPlay:false
    }

    CloseVideoHandler = () => {
        this.setState({
                isPlay: false
        })
    }

    PlayVideoHandler = () => {
        this.setState({
                isPlay: true
        })
    }
    
    render(){
        const defaultView = (
            <section className={classes.Container}>
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
                        {this.state.text.Heading}
                        <span className={classes.Hightlight}>
                            {this.state.text.Hightlight}
                        </span>
                    </p>
                    <Button clicked={this.PlayVideoHandler} type="btnVideo">{this.state.text.Button}</Button>
                </div>
            </section>
        );

        const watchVideoView=(
            <section className={classes.bgClickedVideo}>
                <span 
                    className={classes.bgCancel}
                    onClick={this.CloseVideoHandler} >X</span>
                <video
                    className={classes.bgVideoContent}
                    autoPlay
                    controls
                    id="video-clicked"
                    poster={poster}
                    onEnded={this.CloseVideoHandler} >
                    <source
                        src="https://s3-us-west-2.amazonaws.com/doosan-microsite/doosan_hero_video.mp4"
                        typeof="video/mp4" />
                    <source
                        src="https://s3-us-west-2.amazonaws.com/doosan-microsite/doosan_hero_video.mp4"
                        typeof="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </section>
        )

        if (this.state.isPlay) {
            return watchVideoView;
        } else {
            return defaultView;
        }
    }
}

export default HeroSection;