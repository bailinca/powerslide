import React from 'react';

const NextSlide = React.createClass({
	clickHandler() {
		this.props.updateAppState({
			'currentSlide': this.props.state.currentSlide + 1
		});
	},
	render() {
		return <div className = 'component next-slide' onClick = {this.clickHandler}>
			NextSlide
		</div>;
	}
});

export default NextSlide;
