import * as React from 'react';

class EditBtn extends React.Component<IGenericProps, {}> {
	clickHandler(): void {
		this.props.updateAppState({
			'view': 'edit'
		});
	}
	render(): React.ReactElement<HTMLDivElement> {
		return <div className = 'component edit-btn' onClick = {this.clickHandler.bind(this)}>
		</div>;
	}
};

export default EditBtn;
