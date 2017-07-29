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

/* tslint:disable:no-any */
if ((module as any).hot) {
  // Enable Webpack hot module replacement for reducers
  (module as any).hot.accept('./reducers', () => {
    /* tslint:enable:no-any */
    /* tslint:disable:no-require-imports */
    const nextReducer: Reducer<IAppState> = require('./reducers').default;
    store.replaceReducer(nextReducer);
  });
}

export default store;
