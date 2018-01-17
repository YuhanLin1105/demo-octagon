import React, { Component } from 'react';

import classes from './Layout.css';
import HtmlComment from '../../components/HtmlComment/HtmlComment';
import NavBar from '../../components/NavBar/NavBar';


class Layout extends Component {
    state = {
        sideDrawer:{
            show:false
        }
      }
    
      sideDrawerCloseHandler = () => {
        this.setState({
          showSideDrawer: false
        })
      }
      sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
          return {
            showSideDrawer: !prevState.showSideDrawer
          };
        });
      }


    render() {
        return (
            <React.Fragment>
                <HtmlComment text="Container" />
                <div className={classes.Container}>
                    <HtmlComment text="NavBar" />
                    <NavBar fixedTop />
                    <main className={classes.MainContent}>
                        main
                    </main>
                </div>

            </React.Fragment>
        );

    };
};

export default Layout;