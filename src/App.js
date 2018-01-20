import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import ContactPage from './containers/ContactPage/ContactPage';
import * as pageName from './constant/pageName';

class App extends Component {

  state = {
    currentPage: pageName.PAGE_LANDING
  }


  render() {

    let page = null;
    switch (this.state.currentPage) {
      case pageName.PAGE_LANDING:
        page = (
          <Layout>
            <LandingPage />
          </Layout>
        )
        break;
      case pageName.PAGE_CONTACT:
        page = (
          <Layout>
            <ContactPage />
          </Layout>
        )
      default:
        break;
    }
    return page;
  }
}

export default App;
