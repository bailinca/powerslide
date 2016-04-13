import * as React from 'react';

import PrevSlide from './prev-slide.tsx';
import NextSlide from './next-slide.tsx';

class PrevNext extends React.Component<IGenericProps, {}> {
	render(): React.ReactElement<HTMLDivElement> {
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
};

export default PrevNext;
