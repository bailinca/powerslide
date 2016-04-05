import React from 'react';

const AddSlide = React.createClass({
	clickHandler() {
		this.props.updateAppState({
			'sidebar': 'slideTypeChooser'
		});
	},
	render() {
		return <div className = 'component add-slide' onClick = {this.clickHandler}>
		</div>;
	}
});

export default AddSlide;
