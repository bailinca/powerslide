/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';
import EditBtn from './edit-btn.tsx';
import PrevNext from './prev-next.tsx';

const PresentControls = React.createClass<IGenericProps, IGenericState>({
	render() {
		return <div className = 'component present-controls'>
			{this.props.state.currentSlide + 1 + ' / ' + this.props.state.slides.length}
			<PrevNext
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<EditBtn
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
		</div>;
	}
});

export default PresentControls;
