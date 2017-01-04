import * as React from 'react';

class SidebarTitleOnly extends React.Component<IGenericProps, {}> {

	clickHandler(): void {
		this.props.addSlide({
			'title': '',
			'type': 'titleOnly'
		});
	}

	render(): React.ReactElement<HTMLDivElement> {
		return <div
			className = 'component sidebar-title-only'
			onClick = {this.clickHandler.bind(this)}
			data-balloon='Title only'
			data-balloon-pos='up'
		>
		</div>;
	}
};

export default SidebarTitleOnly;
