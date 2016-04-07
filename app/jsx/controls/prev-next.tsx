/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';
import PrevSlide from './prev-slide.tsx';
import NextSlide from './next-slide.tsx';

const PrevNext = React.createClass<IGenericProps, IGenericState>({
	render() {
		return <div className = 'component prev-next'>
			<PrevSlide
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<NextSlide
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
		</div>;
	}
});

export default PrevNext;
