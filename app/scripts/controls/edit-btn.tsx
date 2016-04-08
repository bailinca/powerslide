import * as React from 'react';

class EditBtn extends React.Component<IGenericProps, IGenericState> {
	clickHandler() {
		this.props.updateAppState({
			'view': 'edit'
		});
	}
	render() {
		return <div className = 'component edit-btn' onClick = {this.clickHandler.bind(this)}>
		</div>;
	}
};

export default EditBtn;
