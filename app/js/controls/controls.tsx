import * as React from 'react';

import PresentBtn from './present-btn';
import AddSlide from './add-slide';
import RemoveSlide from './remove-slide';
import PrevNext from './prev-next';

class Controls extends React.Component<IGenericProps, {}> {
	render(): React.ReactElement<HTMLDivElement> {
		return <div className = 'component controls'>
			<PresentBtn
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<AddSlide
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<RemoveSlide
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<PrevNext
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
		</div>;
	}
};

export default Controls;
