import React from 'react';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomeView } from 'src/components';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url('~static/fonts/Roboto/Roboto-Regular.ttf') format("truetype");
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url('~static/fonts/Open_Sans/OpenSans-Regular.ttf') format("truetype");
        font-weight: normal;
        font-style: normal;
    }

    html {
        font-family: "Roboto";
    }

    html, body, #app {
        height: 100%;
        padding: 0;
        margin: 0;
    }
`;

const RootView: React.FunctionComponent = () => (
  <div className={'RootView'}>
    <GlobalStyles />
    <BrowserRouter>
      <Route path={'/'} exact component={HomeView} />
    </BrowserRouter>
  </div>
);

export default hot(RootView);
