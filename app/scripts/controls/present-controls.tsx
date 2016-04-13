import * as React from 'react';

import EditBtn from './edit-btn.tsx';
import PrevNext from './prev-next.tsx';

class PresentControls extends React.Component<IGenericProps, {}> {
	render(): React.ReactElement<HTMLDivElement> {
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
};

export default PresentControls;
