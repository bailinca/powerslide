import * as React from 'react';

class PrevSlide extends React.Component<IGenericProps, IGenericState> {
	constructor(props) {
		super(props);
	}
	clickHandler() {
		let currentSlide = this.props.state.currentSlide - 1;
		if (currentSlide >= 0) {
			this.props.updateAppState({currentSlide});
		}
	}
	render() {
		return <div className = 'component prev-slide' onClick = {this.clickHandler.bind(this)}>
		</div>;
	}
};

export default PrevSlide;
