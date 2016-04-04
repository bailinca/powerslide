import React from 'react';

const Title = React.createClass({
	changeHandler(e) {
		let slides = this.props.state.slides;
		slides[this.props.state.currentSlide].title = e.target.value;
		this.props.changeHandler(slides);
	},
	render() {
		return <div className = 'component title'>
			<input
				value =	{this.props.state.slides[this.props.state.currentSlide].title}
				onChange = {this.changeHandler}
			/>
		</div>;
	}
});

export default Title;
