import React from 'react';

var SetIntervalMixin = {
	componentWillMount() {
		this.intervals = [];
	},
	setInterval() {
		this.intervals.push(setInterval(...arguments));
	},
	componentWillUnmount() {
		this.intervals.forEach(clearInterval);
	}
};

var TickTock = React.createClass({
	mixins: [SetIntervalMixin], // Use the mixin
	getInitialState() {
		return {seconds: 0};
	},
	componentDidMount() {
		this.setInterval(this.tick, 1000); // Call a method on the mixin
	},
	tick() {
		this.setState({
			seconds: this.state.seconds + 1
		});
	},
	render() {
		return (
			<p>
				React has been running for {this.state.seconds}
				{' '}seconds.
			</p>
		);
	}
});

export default TickTock;
