import React from 'react';
import Controls from '../controls/controls.jsx';
import SlideTypeChooser from './slide-type-chooser.jsx';

const Sidebar = React.createClass({
	render() {
		return <div>
			Sidebar
			<Controls />
			<SlideTypeChooser />
		</div>;
	}
});

export default Sidebar;
