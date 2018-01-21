import React from 'react';

import HeroSection from '../../components/HeroSection/HeroSection';
import TextSection from '../../components/TextSection/TextSection';

const LandingPage = (props) => {
    return (
        <React.Fragment>
            <HeroSection />
            <TextSection />
        </React.Fragment>
    );
};

export default LandingPage;