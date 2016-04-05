import React from 'react';

const SidebarTitleText = React.createClass({
	clickHandler() {
		this.props.updateAppState({
		});
	},
	render() {
		return <div className = 'component sidebar-title-text'
			onClick = {this.clickHandler}>
		</div>;
	}
});

export default SidebarTitleText;
