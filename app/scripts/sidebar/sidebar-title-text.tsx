import * as React from 'react';

class SidebarTitleText extends React.Component<IGenericProps, {}> {
	clickHandler(): void {
		this.props.addSlide({
			'type': 'titleText',
			'title': '',
			'text': ''
		});
	}
	render(): React.ReactElement<HTMLDivElement> {
		return <div className = 'component sidebar-title-text'
			onClick = {this.clickHandler.bind(this)}>
		</div>;
	}
};

export default SidebarTitleText;
