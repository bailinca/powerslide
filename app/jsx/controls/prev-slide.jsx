import React from 'react';

const PrevSlide = React.createClass({
	clickHandler() {
		this.props.updateAppState({
			'currentSlide': this.props.state.currentSlide - 1
		});
	},
	render() {
		return <div className = 'component prev-slide' onClick = {this.clickHandler}>
		</div>;
	}
});

export default PrevSlide;
