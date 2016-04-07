/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';

class AddSlide extends React.Component<IGenericProps, IGenericState>{
	constructor(props) {
		super(props);
	}
	clickHandler() {
		this.props.updateAppState({
			'sidebar': 'slideTypeChooser'
		});
	}
	render() {
		return <div className = 'component add-slide' onClick = {this.clickHandler.bind(this)}>
		</div>;
	}
};

export default AddSlide;
