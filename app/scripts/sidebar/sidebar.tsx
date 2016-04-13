import * as React from 'react';

import Controls from '../controls/controls.tsx';
import SlideTypeChooser from './slide-type-chooser.tsx';

class Sidebar extends React.Component<IGenericProps, {}> {
	render(): React.ReactElement<HTMLDivElement> {
		return <div className = 'component sidebar'>
			{
				this.props.state.sidebar === 'controls' ?
					<Controls
						state = {this.props.state}
						updateAppState = {this.props.updateAppState}
					/> :
					<SlideTypeChooser
						state = {this.props.state}
						updateAppState = {this.props.updateAppState}
					/>
			}
		</div>;
	}
}

export default Sidebar;
