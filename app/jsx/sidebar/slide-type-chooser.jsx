import React from 'react';
import SidebarTitleText from './sidebar-title-text.jsx';
import SidebarTitlePic from './sidebar-title-pic.jsx';
import SidebarTitleOnly from './sidebar-title-only.jsx';

const SlideTypeChooser = React.createClass({
	clickHandler() {
		this.props.updateAppState({
			'sidebar': 'controls'
		});
	},
	render() {
		return <div className = 'component slide-type-chooser'
			onClick = {this.clickHandler}>

			<SidebarTitleText
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<SidebarTitlePic
					state = {this.props.state}
					updateAppState = {this.props.updateAppState}
			/>
			<SidebarTitleOnly
					state = {this.props.state}
					updateAppState = {this.props.updateAppState}
			/>
		</div>;
	}
});

export default SlideTypeChooser;
