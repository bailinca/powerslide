import * as React from 'react';

class SidebarTitleOnly extends React.Component<IGenericProps, {}> {
	clickHandler(): void {
		this.props.addSlide({
			'type': 'titleOnly',
			'title': ''
		});
	}
	render(): React.ReactElement<HTMLDivElement> {
		return <div className = 'component sidebar-title-only'
			onClick = {this.clickHandler.bind(this)}>
		</div>;
	}
};

export default SidebarTitleOnly;
