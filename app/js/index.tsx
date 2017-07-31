/// <reference path="./interfaces.d.ts"/>

import '../style/main.scss';
import 'typeface-poiret-one';

import 'balloon-css';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import App from './app';
import configureStore from './store';

const store: Store<IAppState> = configureStore();
const appElement: Element = document.createElement('div');
document.body.appendChild(appElement);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  appElement
);

// Hot Module Replacement API

if (module.hot) {
  module.hot.accept('./app', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      appElement
    );
  });
}
