import * as React from 'react';

class SidebarTitleText extends React.Component<IGenericProps, {}> {

	clickHandler(): void {
		this.props.addSlide({
			'text': '',
			'title': '',
			'type': 'titleText'
		});
	}

	render(): React.ReactElement<HTMLDivElement> {
		return <div
			className = 'component sidebar-title-text'
			onClick = {this.clickHandler.bind(this)}
			data-balloon='Title and text'
			data-balloon-pos='up'
		>
		</div>;
	}
};

export default SidebarTitleText;
