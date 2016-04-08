import * as React from 'react';

class Title extends React.Component<IGenericProps, IGenericState> {
	changeHandler(e) {
		let slides = this.props.state.slides;
		slides[this.props.state.currentSlide].title = e.target.value;
		this.props.updateAppState(slides);
	}
	render() {
		return <div className = 'component title'>
			<input
				value =	{this.props.state.slides[this.props.state.currentSlide].title}
				onChange = {this.changeHandler.bind(this)}
				disabled = {this.props.state.view === 'edit' ? false : true}
			/>
		</div>;
	}
};

export default Title;
