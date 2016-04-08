import * as React from 'react';

class SidebarTitleOnly extends React.Component<IGenericProps, IGenericState> {
	clickHandler() {
		this.props.addSlide('titleOnly');
	}
	render() {
		return <div className = 'component sidebar-title-only'
			onClick = {this.clickHandler.bind(this)}>
		</div>;
	}
};

export default SidebarTitleOnly;
