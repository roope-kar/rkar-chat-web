import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { AuthView, WorkspaceView } from 'src/components';

const Container = styled.div`
  min-height: 100%;
`;

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto-Regular.ttf') format("truetype");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Open Sans';
        src: url('/fonts/OpenSans-Regular.ttf') format("truetype");
        font-weight: normal;
        font-style: normal;
    }

    html {
        font-family: "Roboto";
        background-attachment: fixed;
        background: #000000;
    }

    html, body, #app {
        height: 100vh;
        min-height: 100vh;
        padding: 0;
        margin: 0;
    }
`;

const RootView: React.FunctionComponent = () => {
  const hasActiveToken = true;
  return (
    <Container>
      <GlobalStyles />
      <BrowserRouter>
        <Route path={'/'} component={AuthView} />
        {hasActiveToken && <Route path={'/workspace'} component={WorkspaceView} />}
        <Redirect to={'/'} />
      </BrowserRouter>
    </Container>
  );
};

export default hot(RootView);
