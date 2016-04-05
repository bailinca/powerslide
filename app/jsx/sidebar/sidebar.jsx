import React from 'react';
import Controls from '../controls/controls.jsx';
import SlideTypeChooser from './slide-type-chooser.jsx';

const Sidebar = React.createClass({
	render() {
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
});

export default Sidebar;
