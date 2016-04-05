import React from 'react';
import TitleText from './title-text.jsx';
import TitlePic from './title-pic.jsx';
import TitleOnly from './title-only.jsx';

const CurrentSlide = React.createClass({
	render() {
		const type = this.props.state.slides[this.props.state.currentSlide].type;
		return <div className = 'component current-slide'>
			{
				type === 'titleText' ?
					<TitleText
						state = {this.props.state}
						updateAppState = {this.props.updateAppState}
					/> : type === 'titlePic' ?
					<TitlePic
						state = {this.props.state}
						updateAppState = {this.props.updateAppState}
					/> :
					<TitleOnly
						state = {this.props.state}
						updateAppState = {this.props.updateAppState}
					/>
			}
			<h3>
				{this.props.state.currentSlide + 1 + ' / ' +
					this.props.state.slides.length}
			</h3>
		</div>;
	}
});

export default CurrentSlide;
