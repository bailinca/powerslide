import React from 'react';
import TitleText from './title-text.jsx';
import TitlePic from './title-pic.jsx';
import TitleOnly from './title-only.jsx';

const CurrentSlide = React.createClass({
	render() {
		return <div className = 'component current-slide'>
			<TitleText
				state = {this.props.state}
				changeHandler = {this.props.changeHandler}
			/>
			<TitlePic
				state = {this.props.state}
				changeHandler = {this.props.changeHandler}
			/>
			<TitleOnly
				state = {this.props.state}
				changeHandler = {this.props.changeHandler}
			/>
		</div>;
	}
});

export default CurrentSlide;
