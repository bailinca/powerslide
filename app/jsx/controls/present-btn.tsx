/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';

const PresentBtn = React.createClass<IGenericProps, IGenericState>({
	clickHandler() {
		this.props.updateAppState({
			'view': 'present'
		});
	},
	render() {
		return <div className = 'component present-btn' onClick = {this.clickHandler}>
		</div>;
	}
});

export default PresentBtn;
