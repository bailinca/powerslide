/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';

const EditBtn = React.createClass<IGenericProps, IGenericState>({
	clickHandler() {
		this.props.updateAppState({
			'view': 'edit'
		});
	},
	render() {
		return <div className = 'component edit-btn' onClick = {this.clickHandler}>
		</div>;
	}
});

export default EditBtn;
