/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';

class PresentBtn extends React.Component<IGenericProps, IGenericState>{
	constructor(props) {
		super(props);
	}
	clickHandler() {
		this.props.updateAppState({
			'view': 'present'
		});
	}
	render() {
		return <div className = 'component present-btn' onClick = {this.clickHandler.bind(this)}>
		</div>;
	}
};

export default PresentBtn;
