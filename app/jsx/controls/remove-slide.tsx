/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';

const RemoveSlide = React.createClass<IGenericProps, IGenericState>({
	clickHandler() {
		let slides = this.props.state.slides;
		if (slides.length === 1) {
			return;
		}
		slides.splice(this.props.state.currentSlide, 1);
		this.props.updateAppState({
			slides,
			'currentSlide': slides.length === this.props.state.currentSlide ?
				(this.props.state.currentSlide - 1) : this.props.state.currentSlide
		});
	},
	render() {
		return <div className = 'component remove-slide' onClick = {this.clickHandler}>
		</div>;
	}
});

export default RemoveSlide;
