import React, { Component } from 'react';

import ContactSection from './ContactSection/ContactSection';
import HeroSection from '../../components/HeroSection/HeroSection';
import TextSection from '../../components/TextSection/TextSection';

class ContactPage extends Component {

    render() {
        return (
            <React.Fragment>
                <ContactSection />
            </React.Fragment>
        );
    }
}

export default ContactPage;