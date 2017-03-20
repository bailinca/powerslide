import * as React from 'react';

class PrevSlide extends React.Component<IGenericProps, {}> {

	clickHandler(): void {
		let currentSlide: number = this.props.state.currentSlide - 1;
		if (currentSlide >= 0) {
			this.props.updateAppState({currentSlide});
		}
	}

	render(): React.ReactElement<HTMLDivElement> {
		return <div
			className = 'component prev-slide'
			onClick = {this.clickHandler.bind(this)}
			data-balloon='Previous slide'
			data-balloon-pos='up'
		>
		</div>;
	}
};

export default PrevSlide;
