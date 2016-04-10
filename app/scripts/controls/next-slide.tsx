import * as React from 'react';

class NextSlide extends React.Component<IGenericProps, {}> {
	clickHandler(): void {
		let currentSlide: number = this.props.state.currentSlide + 1;
		if (currentSlide < this.props.state.slides.length) {
			this.props.updateAppState({currentSlide});
		}
	}
	render(): React.ReactElement<HTMLDivElement> {
		return <div className = 'component next-slide' onClick = {this.clickHandler.bind(this)}>
		</div>;
	}
};

export default NextSlide;
