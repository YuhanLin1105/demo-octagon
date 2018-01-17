import React,{Component} from 'react';

import HeroSection from '../../components/HeroSection/HeroSection';


class MainContent extends Component {
    render(){
        return(
            <React.Fragment>
                <HeroSection/>
            </React.Fragment> 
        );
    };
}

export default MainContent;