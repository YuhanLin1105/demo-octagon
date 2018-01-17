import React, { Component } from 'react';

import classes from './Layout.css';
import HtmlComment from '../../components/HtmlComment/HtmlComment';
import NavBar from '../../components/NavBar/NavBar';
import SideDrawer from '../../components/NavBar/SideDrawer/SideDrawer';
import MainContent from '../MainContent/MainContent';

class Layout extends Component {
    state = {
        sideDrawer: {
            isOpen: false
        }
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            sideDrawer: {
                isOpen: false
            }
        })
    }

    sideDrawerOpenHandler = () => {
        console.log('clicked');
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
                <HtmlComment text="Container" />
                <div className={classes.Container}>
                    <HtmlComment text="SideDrawer" />
                    <SideDrawer isOpen={this.state.sideDrawer.isOpen} />
                    <HtmlComment text="NavBar" />
                    <NavBar
                        fixedTop
                        toggleClicked={this.sideDrawerOpenHandler}
                        toggleIsOpen={this.state.sideDrawer.isOpen} />
                    <main className={classes.MainContent}>
                        <HtmlComment text="MainContent" />
                        {/* <MainContent/> */}asdf
                    </main>
                </div>
            </React.Fragment>
        );

    };
};

export default Layout;