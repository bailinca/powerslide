/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';

const SidebarTitleText = React.createClass<IGenericProps, IGenericState>({
	clickHandler() {
		this.props.addSlide('titleText');
	},
	render() {
		return <div className = 'component sidebar-title-text'
			onClick = {this.clickHandler}>
		</div>;
	}
});

export default SidebarTitleText;
