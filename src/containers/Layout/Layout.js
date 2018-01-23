import React, { Component } from 'react';

import classes from './Layout.css';
import NavBar from '../../components/NavBar/NavBar';
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
                <div className={classes.Container}> 
                    <header className={classes.Header}>
                        <NavBar
                            pageChange={(page)=>{
                                this.props.pageChange(page);    
                                this.sideDrawerCloseHandler();
                                
                            }}
                            toggleClicked={this.sideDrawerOpenHandler}
                            toggleIsOpen={this.state.sideDrawer.isOpen} />
                    </header>
                    <main className={classes.Content}>
                            {this.props.children}   
                        <Footer />
                    </main>
                </div>
            </React.Fragment>
        );
    };
};

export default Layout;