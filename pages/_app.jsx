import "tailwindcss/tailwind.css";
import '../styles/globals.css'
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from "react"
import Layouts from "../components/Layouts/Layouts";
import Theme from '../theme/theme'
import { StoreProvider } from "../components/context/Store";
function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);


  return (
    <>
    <StoreProvider>
    <ThemeProvider theme={Theme}>
      <Layouts>
      <Component {...pageProps} />  
      </Layouts>  
      </ThemeProvider>
      </StoreProvider>
    </>
  )
}

export default MyApp


MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};