import React from 'react';

const PresentBtn = React.createClass({
	clickHandler() {
		this.props.updateAppState({
			'view': 'present',
			'currentSlide': 0
		});
	},
	render() {
		return <div className = 'component present-btn' onClick = {this.clickHandler}>
		</div>;
	}
});

export default PresentBtn;
