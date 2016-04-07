/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';

const AddSlide = React.createClass<IGenericProps, IGenericState>({
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
