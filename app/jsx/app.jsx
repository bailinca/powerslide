import '../style/main.scss';
import React from 'react';
import {render} from 'react-dom';
import Header from './header';
import Edit from './edit';
import Present from './present';

((function() {
	// TODO: get info from localStorage & set the initial state on App
	const AppElement = document.createElement('div');
	document.body.appendChild(AppElement);
	const App = React.createClass({
		render() {
			return <div>
				App
				<Header />
				<Edit />
				<Present />
			</div>;
		}
	});

	render(<App/>, AppElement);
})());
