import React from 'react';

var HelloWorld = React.createClass({
	propTypes: {
		date: React.PropTypes.instanceOf(Date).isRequired
	},
	render() {
		return (
			<p>
				Hello, {' '}
				<input type="text" placeholder="Your name here"/> {' '}
				! It is {this.props.date.toTimeString()}
			</p>
		);
	}
});

export default HelloWorld;
