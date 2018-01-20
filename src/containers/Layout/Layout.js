import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import classes from './Layout.css';
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
                <react-comment> Main Container </react-comment>
                <div className={classes.Container}> 

                    <react-comment> NavBar </react-comment>
                    <header className={classes.Header}>
                        <NavBar
                            pageChange={(page)=>{
                                this.props.pageChange(page);    
                                this.sideDrawerCloseHandler();
                                
                            }}
                            toggleClicked={this.sideDrawerOpenHandler}
                            toggleIsOpen={this.state.sideDrawer.isOpen} />
                    </header>

                    <react-comment> Main Content </react-comment>
                    <main className={classes.Content}>

                        <div className={classes.SectionContent}>
                            {this.props.children}
                        </div>

                        <react-comment> Footer </react-comment>              
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