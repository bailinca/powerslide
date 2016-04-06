import React from 'react';
import CurrentSlide from './current-slide/current-slide.jsx';
import PresentControls from './controls/present-controls.jsx';

const Present = React.createClass({
	render() {
		return <div className = 'component present'>
			<CurrentSlide
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<PresentControls
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
		</div>;
	}
});

export default Present;
