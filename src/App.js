import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "@chakra-ui/core";
import { ThemeProvider as EmotionTheme } from "emotion-theming";
import React, { Fragment } from "react";
import Head from "react-helmet";
import "styles/index.scss";
import theme from "theme";
import client from "./apollo";
import Routes from "./Router";

const App = () => {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="/nprogress.css" />
      </Head>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <EmotionTheme theme={theme}>
            <Routes />
          </EmotionTheme>
        </ThemeProvider>
      </ApolloProvider>
    </Fragment>
  );
};

export default App;
