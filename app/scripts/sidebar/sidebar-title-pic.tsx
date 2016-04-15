import * as React from 'react';

class SidebarTitlePic extends React.Component<IGenericProps, {}> {

	clickHandler(): void {
		this.props.addSlide({
			'type': 'titlePic',
			'title': '',
			'url': ''
		});
	}

	render(): React.ReactElement<HTMLDivElement> {
		return <div
			className = 'component sidebar-title-pic'
			onClick = {this.clickHandler.bind(this)}
			data-balloon='Title and picture'
			data-balloon-pos='up'
		>
		</div>;
	}
};

export default SidebarTitlePic;
