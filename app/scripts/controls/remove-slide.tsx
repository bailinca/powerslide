import * as React from 'react';

class RemoveSlide extends React.Component<IGenericProps, IGenericState> {
	clickHandler(): void {
		let slides: ISlide[] = this.props.state.slides;
		if (slides.length === 1) {
			return;
		}
		slides.splice(this.props.state.currentSlide, 1);
		this.props.updateAppState({
			slides,
			'currentSlide': slides.length === this.props.state.currentSlide ?
				(this.props.state.currentSlide - 1) : this.props.state.currentSlide
		});
	}
	render(): React.ReactElement<HTMLDivElement> {
		return <div
			className = 'component remove-slide'
			onClick = {this.clickHandler.bind(this)}
		>
		</div>;
	}
};

export default RemoveSlide;
