import React from 'react';

const RemoveSlide = React.createClass({
	clickHandler() {
		let slides = this.props.state.slides;
		slides.splice(this.props.state.currentSlide, 1);
		this.props.updateAppState({
			'currentSlide': slides.length === this.props.state.currentSlide ?
				(this.props.state.currentSlide - 1) : this.props.state.currentSlide,
			slides
		});
	},
	render() {
		return <div className = 'component remove-slide' onClick = {this.clickHandler}>
			RemoveSlide
		</div>;
	}
});

export default RemoveSlide;
