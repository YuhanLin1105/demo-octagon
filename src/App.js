import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import ContactPage from './containers/ContactPage/ContactPage';
import * as pageName from './constant/pageName';

class App extends Component {

  state = {
    currentPage: pageName.PAGE_LANDING ,

  }

  pageChangeHandler = (page) => {
    this.setState({
      currentPage: page
    });
  }

  render() {

    let page = null;
    switch (this.state.currentPage) {
      case pageName.PAGE_LANDING:
        page = (
          <Layout pageChange={this.pageChangeHandler}>
            <LandingPage />
          </Layout>
        );
        break;
      case pageName.PAGE_CONTACT:
        page = (
          <Layout pageChange={this.pageChangeHandler}>
            <ContactPage />
          </Layout>
        );
        break;
      default:
        break;
    }

    return page;
  }
}

export default App;
