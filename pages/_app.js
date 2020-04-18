import React from 'react';
import App from 'next/app';
import AppContextProvider from '../components/context/AppContext';

import './../styles/index.scss';
import './../styles/auth.scss';
import './../styles/dashboard.scss';
import './../styles/team.scss';
import './../styles/modal.scss';
import './../styles/charities.scss';
import './../styles/terms.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-phone-input-2/lib/style.css';


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    );
  }
}
