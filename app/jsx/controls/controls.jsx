import React from 'react';
import PresentBtn from './present-btn.jsx';
import AddSlide from './add-slide.jsx';
import RemoveSlide from './remove-slide.jsx';
import PrevNext from './prev-next.jsx';

const Controls = React.createClass({
	render() {
		return <div className = 'component controls'>
			<PresentBtn
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<AddSlide
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<RemoveSlide
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<PrevNext
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
		</div>;
	}
});

export default Controls;
