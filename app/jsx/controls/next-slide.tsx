/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';

class NextSlide extends React.Component<IGenericProps, IGenericState> {
	constructor(props) {
		super(props);
	}
	clickHandler() {
		let currentSlide = this.props.state.currentSlide + 1;
		if (currentSlide < this.props.state.slides.length) {
			this.props.updateAppState({currentSlide});
		}
	}
	render() {
		return <div className = 'component next-slide' onClick = {this.clickHandler.bind(this)}>
		</div>;
	}
};

export default NextSlide;
