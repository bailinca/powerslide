import React from 'react';
import Controls from '../controls/controls.jsx';
import SlideTypeChooser from './slide-type-chooser.jsx';

const Sidebar = React.createClass({
	render() {
		return <div className = 'component sidebar'>
			<Controls />
			<SlideTypeChooser />
		</div>;
	}
});

export default Sidebar;
