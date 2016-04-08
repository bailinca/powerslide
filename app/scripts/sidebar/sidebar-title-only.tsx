import * as React from 'react';

class SidebarTitleOnly extends React.Component<IGenericProps, IGenericState> {
	clickHandler(): void {
		this.props.addSlide('titleOnly');
	}
	render(): React.ReactElement<HTMLDivElement> {
		return <div className = 'component sidebar-title-only'
			onClick = {this.clickHandler.bind(this)}>
		</div>;
	}
};

export default SidebarTitleOnly;
