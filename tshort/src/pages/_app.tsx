import { SessionProvider } from 'next-auth/react';
import React from 'react';
import AppNavBar from '../components/nav/AppNavBar';
import '../styles/globals.css';

import WithAuth from '../helpers/WithAuth';
import { ExtendedAppProps } from '../types';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#544961',
      contrastText: '#F7F9F8',
    },
    secondary: {
      main: '#DBB6FB',
      contrastText: '#000',
    },
  },
});

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: ExtendedAppProps) => (
  <SessionProvider refetchInterval={5 * 60} session={session}>
    {Component.auth ? (
      <WithAuth options={Component.auth}>
        <AppNavBar />
        <Component {...pageProps} />
      </WithAuth>
    ) : (
      <>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )}
  </SessionProvider>
);

export default MyApp;
