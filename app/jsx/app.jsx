import '../style/main.scss';
import React from 'react';
import {render} from 'react-dom';
import Header from './header';
import Edit from './edit';
import Present from './present';

((function() {
	let state = JSON.parse(localStorage.getItem('state'));
	if (!state) {
		state = {
			'view': 'edit',
			'currentSlide': 0,
			'sidebar': 'controls',
			'slides': [
				{
					'type': 'titleText',
					'title': 'Slide title',
					'text': 'Slide text'
				}
			]
		};
		localStorage.setItem('state', JSON.stringify(state));
	}
	const AppElement = document.createElement('div');
	document.body.appendChild(AppElement);
	const App = React.createClass({
		getInitialState() {
			return state;
		},
		render() {
			return <div className = 'component app'>
				<Header />
				<Edit />
				<Present />
			</div>;
		}
	});

	render(<App/>, AppElement);
})());
