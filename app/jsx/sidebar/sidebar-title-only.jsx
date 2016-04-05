import React from 'react';

const SidebarTitleOnly = React.createClass({
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
