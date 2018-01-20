import React, { Component } from 'react';

import classes from './Layout.css';
import HtmlComment from '../../components/HtmlComment/HtmlComment';
import NavBar from '../../components/NavBar/NavBar';
import SideDrawer from '../../components/NavBar/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    state = {
        sideDrawer: {
            isOpen: false
        },
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
                            toggleClicked={this.sideDrawerOpenHandler}
                            toggleIsOpen={this.state.sideDrawer.isOpen} />
                    </header>

                    <HtmlComment text="Main Content" />
                    <main className={classes.Content}>
                        {this.props.children}

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