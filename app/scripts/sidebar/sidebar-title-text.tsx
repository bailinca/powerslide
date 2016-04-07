import * as React from 'react';

class SidebarTitleText extends React.Component<IGenericProps, IGenericState>{
	constructor(props) {
		super(props);
	}
	clickHandler() {
		this.props.addSlide('titleText');
	}
	render() {
		return <div className = 'component sidebar-title-text'
			onClick = {this.clickHandler.bind(this)}>
		</div>;
	}
};

export default SidebarTitleText;
