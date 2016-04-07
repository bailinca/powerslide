/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';

const SidebarTitlePic = React.createClass<IGenericProps, IGenericState>({
	clickHandler() {
		this.props.addSlide('titlePic');
	},
	render() {
		return <div className = 'component sidebar-title-pic'
			onClick = {this.clickHandler}>
		</div>;
	}
});

export default SidebarTitlePic;
