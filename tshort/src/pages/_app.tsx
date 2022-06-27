import { SessionProvider } from "next-auth/react";
import React from "react";

import WithAuth from "../helpers/WithAuth";
import { ExtendedAppProps } from "../types";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: ExtendedAppProps) => (
    <SessionProvider refetchInterval={5 * 60} session={session}>
        {Component.auth ? (
          <WithAuth options={Component.auth}>
            <Component {...pageProps} />
          </WithAuth>
        ) : (
          <Component {...pageProps} />
        )}
    </SessionProvider>
  );

export default MyApp;
