import React from 'react';
import Title from './title.jsx';

const TitleOnly = React.createClass({
	changeHandler(e) {
		let slides = this.props.state.slides;
		slides[this.props.state.currentSlide].title = e.target.value;
		this.props.changeHandler(slides);
	},
	render() {
		return <div className = 'component title-only'>
			<Title state = {this.props.state} changeHandler = {this.props.changeHandler}/>
		</div>;
	}
});

export default TitleOnly;
