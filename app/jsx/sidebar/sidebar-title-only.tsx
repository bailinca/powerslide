/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';

const SidebarTitleOnly = React.createClass<IGenericProps, IGenericState>({
	clickHandler() {
		this.props.addSlide('titleOnly');
	},
	render() {
		return <div className = 'component sidebar-title-only'
			onClick = {this.clickHandler}>
		</div>;
	}
});

export default SidebarTitleOnly;
