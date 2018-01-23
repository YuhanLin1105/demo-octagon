import React, { Component } from 'react';

import HeroSection from '../../components/HeroSection/HeroSection';
import TextSection from '../../components/TextSection/TextSection';

class LandingPage extends Component {


    render() {
        return (
            <React.Fragment>
                <HeroSection />
                <TextSection />
            </React.Fragment>
        );
    }

};

export default LandingPage;