import * as React from 'react';

class Text extends React.Component<IGenericProps, IGenericState> {
	constructor(props) {
		super(props);
	}
	changeHandler(e) {
		let slides = this.props.state.slides;
		slides[this.props.state.currentSlide].text = e.target.value;
		this.props.updateAppState(slides);
	}
	render() {
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
