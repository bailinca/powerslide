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
					'type': 'titleOnly',
					'title': 'Slide title'
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
		currentSlideChangeHandler(slides) {
			this.setState({slides});
			localStorage.setItem('state', JSON.stringify(this.state));
		},
		render() {
			return <div className = 'component app'>
				<Header />
				{
					this.state.view === 'edit' ?
						<Edit
							state = {this.state}
							currentSlideChangeHandler = {this.currentSlideChangeHandler}
						/> :
						<Present
							state = {this.state}
							sideBarChangeHandler = {this.sideBarChangeHandler}
						/>
					}
			</div>;
		}
	});

	render(<App/>, AppElement);
})());
