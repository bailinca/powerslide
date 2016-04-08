import * as React from 'react';

class SidebarTitlePic extends React.Component<IGenericProps, IGenericState> {
	clickHandler() {
		this.props.addSlide('titlePic');
	}
	render() {
		return <div className = 'component sidebar-title-pic'
			onClick = {this.clickHandler.bind(this)}>
		</div>;
	}
};

export default SidebarTitlePic;
