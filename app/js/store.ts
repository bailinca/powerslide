import { createStore, Store, Reducer } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducers from './reducers';

import { defaultState } from './defaultState';

let state: IAppState;
const lsState: string = localStorage.getItem('state');

if (!lsState) {
  state = defaultState;
  localStorage.setItem('state', JSON.stringify(state));
} else {
  state = JSON.parse(lsState);
}

const store: Store<IAppState> = createStore(
  reducers,
  state,
  devToolsEnhancer({})
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    /* tslint:disable:no-require-imports */
    const nextReducer: Reducer<IAppState> = require('./reducers').default;
    store.replaceReducer(nextReducer);
  });
}

export default store;
