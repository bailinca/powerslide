import React from 'react';
import PrevSlide from './prev-slide.jsx';
import NextSlide from './next-slide.jsx';

const PrevNext = React.createClass({
	render() {
		return <div className = 'component prev-next'>
			<PrevSlide
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<NextSlide
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
		</div>;
	}
});

export default PrevNext;
