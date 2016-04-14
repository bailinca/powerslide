import * as React from 'react';

import CurrentSlide from './current-slide/current-slide';
import Sidebar from './sidebar/sidebar';

class Edit extends React.Component<IGenericProps, {}> {
	render(): React.ReactElement<HTMLDivElement> {
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
