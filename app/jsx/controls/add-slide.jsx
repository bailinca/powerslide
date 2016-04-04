import React from 'react';

const AddSlide = React.createClass({
	clickHandler() {

	},
	render() {
		return <div className = 'component add-slide' onClick = {this.clickHandler}>
			AddSlide
		</div>;
	}
});

export default AddSlide;
