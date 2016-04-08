import * as React from 'react';

class Text extends React.Component<IGenericProps, IGenericState> {
	changeHandler(e: React.SyntheticEvent): void {
		console.log(e.target);
		let slides: ISlide[] = this.props.state.slides;
		slides[this.props.state.currentSlide].text = (e.target as HTMLInputElement).value;
		this.props.updateAppState(slides);
	}
	render(): React.ReactElement<HTMLDivElement> {
		return <div className = 'component text'>
			<textarea
				value =	{this.props.state.slides[this.props.state.currentSlide].text}
				onChange = {this.changeHandler.bind(this)}
				disabled = {this.props.state.view === 'edit' ? false : true}
			/>
		</div>;
	}
};

export default Text;
