/// <reference path="./interfaces.d.ts"/>

import * as React from 'react';
import CurrentSlide from './current-slide/current-slide.tsx';
import Sidebar from './sidebar/sidebar.tsx';

const Edit = React.createClass<IGenericProps, IGenericState>({
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
});

export default Edit;
