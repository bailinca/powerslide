/// <reference path="./interfaces.d.ts"/>

import '../style/main.scss';
import 'typeface-poiret-one';

import 'balloon-css';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from './app';

import store from './store';

const appElement: Element = document.createElement('div');
document.body.appendChild(appElement);

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  appElement
);

// Hot Module Replacement API

if (module.hot) {
  module.hot.accept('./app', () => {
    render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>,
      appElement
    );
  });
}
