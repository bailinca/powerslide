/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';

const NextSlide = React.createClass<IGenericProps, IGenericState>({
	clickHandler() {
		let currentSlide = this.props.state.currentSlide + 1;
		if (currentSlide < this.props.state.slides.length) {
			this.props.updateAppState({currentSlide});
		}
	},
	render() {
		return <div className = 'component next-slide' onClick = {this.clickHandler}>
		</div>;
	}
});

export default NextSlide;
