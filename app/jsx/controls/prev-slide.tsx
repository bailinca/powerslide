/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';

const PrevSlide = React.createClass<IGenericProps, IGenericState>({
	clickHandler() {
		let currentSlide = this.props.state.currentSlide - 1;
		if (currentSlide >= 0) {
			this.props.updateAppState({currentSlide});
		}
	},
	render() {
		return <div className = 'component prev-slide' onClick = {this.clickHandler}>
		</div>;
	}
});

export default PrevSlide;
