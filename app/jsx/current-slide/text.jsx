import React from 'react';

const Text = React.createClass({
	changeHandler(e) {
		let slides = this.props.state.slides;
		slides[this.props.state.currentSlide].text = e.target.value;
		this.props.updateAppState(slides);
	},
	render() {
		return <div className = 'component text'>
			<textarea
				value =	{this.props.state.slides[this.props.state.currentSlide].text}
				onChange = {this.changeHandler}
				disabled = {this.props.state.view === 'edit' ? false : true}
			/>
		</div>;
	}
});

export default Text;
