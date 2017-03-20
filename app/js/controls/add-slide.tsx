import * as React from 'react';

class AddSlide extends React.Component<IGenericProps, {}> {

	clickHandler(): void {
		this.props.updateAppState({
			'sidebar': 'slideTypeChooser'
		});
	}

	render(): React.ReactElement<HTMLDivElement> {
		return <div
			className = 'component add-slide'
			onClick = {this.clickHandler.bind(this)}
			data-balloon='Add slide'
			data-balloon-pos='up'
		>
		</div>;
	}
};

export default AddSlide;
