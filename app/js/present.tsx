import * as React from 'react';

import CurrentSlide from './current-slide/current-slide';
import PresentControls from './controls/present-controls';

class Present extends React.Component<IGenericProps, {}> {
	render(): React.ReactElement<HTMLDivElement> {
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
};

export default Present;
