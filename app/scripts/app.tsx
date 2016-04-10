/// <reference path="../../typings/main.d.ts"/>
/// <reference path="./interfaces.d.ts"/>

import '../style/main.scss';
import * as React from 'react';
import {render} from 'react-dom';
import Header from './header';
import Edit from './edit';
import Present from './present';

((function(): void {
	let state: IAppState = JSON.parse(localStorage.getItem('state'));
	if (!state) {
		state = {
			'view': 'edit',
			'currentSlide': 0,
			'sidebar': 'controls',
			'slides': [
				{
					'type': 'titleText',
					'title': 'Slide 1',
					'text': 'Slide text'
				},
				{
					'type': 'titlePic',
					'title': 'Slide 2',
					'url': 'http://www.astropython.org/static/images/add_new.png'
				},
				{
					'type': 'titlePic',
					'title': 'Slide 4',
					'url': 'http://www.heyuguys.com/images/2011/11/' +
						'Small-Fry-Toy-Story-Short.jpg'
				},
				{
					'type': 'titleOnly',
					'title': 'Slide 5'
				},
				{
					'type': 'titleOnly',
					'title': 'Slide 6'
				}
			]
		};
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
