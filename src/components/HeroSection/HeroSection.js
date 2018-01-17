import React from 'react';

import poster from '../../assets/images/doosan_poster.png';

const HeroSection = (props) => {
    return (
        <section>
            <video
                controls
                loop
                muted=""
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
        </section>
    );
}

export default HeroSection;