import React, { Component } from 'react';

import classes from './Layout.css';
import HtmlComment from '../../components/HtmlComment/HtmlComment';
import NavBar from '../../components/NavBar/NavBar';
import SideDrawer from '../../components/NavBar/SideDrawer/SideDrawer';
import HeroSection from '../../components/HeroSection/HeroSection';
import TextSection from '../../components/TextSection/TextSection';
import Footer from '../../components/Footer/Footer';


class Layout extends Component {
    state = {
        sideDrawer: {
            isOpen: false
        },
        heroSection: {
            isPlay: false
        }
    }

    heroSectionCloseVideoHandler = () => {
        this.setState({
            heroSection: {
                isPlay: false
            }
        })
    }

    heroSectionPlayVideoHandler = () => {
        this.setState({
            heroSection: {
                isPlay: true
            }
        })
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            sideDrawer: {
                isOpen: false
            }
        })
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return {
                sideDrawer: {
                    isOpen: !prevState.sideDrawer.isOpen
                }
            };
        });
    }


    render() {
        return (
            <React.Fragment>

                <HtmlComment text="Main Container" />
                <div className={classes.Container}>

                    <HtmlComment text="SideDrawer" />
                    <SideDrawer isOpen={this.state.sideDrawer.isOpen} />

                    <HtmlComment text="NavBar" />
                    <header className={classes.Header}>
                        <NavBar
                            fixedTop
                            toggleClicked={this.sideDrawerOpenHandler}
                            toggleIsOpen={this.state.sideDrawer.isOpen} />
                    </header>
                    <HtmlComment text="Main Content" />
                    <main className={classes.Content}>
                        <HtmlComment text="Hero Section" />
                        <section>
                            <HeroSection
                                isPlay={this.state.heroSection.isPlay}
                                btnVideoClicked={this.heroSectionPlayVideoHandler}
                                btnCancelClicked={this.heroSectionCloseVideoHandler} />
                        </section>
                        <HtmlComment text="Text Section" />
                        <section>
                            <TextSection />
                        </section>
                        <HtmlComment text="Footer" />
                        <footer className={classes.Footer}>
                            <Footer />
                        </footer>
                    </main>
                </div>
            </React.Fragment>
        );

    };
};

export default Layout;