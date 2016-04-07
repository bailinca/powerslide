/// <reference path="./interfaces.d.ts"/>

import * as React from 'react';
import CurrentSlide from './current-slide/current-slide.tsx';
import PresentControls from './controls/present-controls.tsx';

const Present = React.createClass<IGenericProps, IGenericState>({
	render() {
		return <div className = 'component present'>
			<CurrentSlide
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<PresentControls
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
		</div>;
	}
});

export default Present;
