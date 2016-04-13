/// <reference path="../../typings/main.d.ts"/>
/// <reference path="./interfaces.d.ts"/>

import '../style/main.scss';

import * as React from 'react';
import {render} from 'react-dom';

import Header from './header';
import Edit from './edit';
import Present from './present';
import {defaultState} from './defaultState.ts';

((function(): void {
	let state: IAppState = JSON.parse(localStorage.getItem('state'));
	if (!state) {
		state = defaultState;
		localStorage.setItem('state', JSON.stringify(state));
	}
	const appElement: Element = document.createElement('div');
	document.body.appendChild(appElement);
	class App extends React.Component<{}, IAppState> {
		constructor(props: {}) {
			super(props);
			this.state = state;
			this.updateAppState = this.updateAppState.bind(this);
		}
		updateAppState(newState: IAppState): void {
			this.setState(
				newState,
				() => localStorage.setItem('state', JSON.stringify(this.state)));
		}
		render(): React.ReactElement<HTMLDivElement> {
			return <div className = 'component app'>
				{
					this.state.view === 'edit' ? <Header /> : null
				}
				{
					this.state.view === 'edit' ?
						<Edit
							state = {this.state}
							updateAppState = {this.updateAppState}
						/> :
						<Present
							state = {this.state}
							updateAppState = {this.updateAppState}
						/>
					}
			</div>;
		}
	}

	render(<App/>, appElement);
})());
