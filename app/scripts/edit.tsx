import * as React from 'react';
import CurrentSlide from './current-slide/current-slide.tsx';
import Sidebar from './sidebar/sidebar.tsx';

class Edit extends React.Component<IGenericProps, IGenericState> {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className = 'component edit'>
			<CurrentSlide
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<Sidebar
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
		</div>;
	}
};

export default Edit;
