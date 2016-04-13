import * as React from 'react';

class PresentBtn extends React.Component<IGenericProps, {}> {

	clickHandler(): void {
		this.props.updateAppState({
			'view': 'present'
		});
	}

	render(): React.ReactElement<HTMLDivElement> {
		return <div
			className = 'component present-btn'
			onClick = {this.clickHandler.bind(this)}
		>
		</div>;
	}
};

export default PresentBtn;
