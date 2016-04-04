import React from 'react';
import Controls from '../controls/controls.jsx';
import SlideTypeChooser from './slide-type-chooser.jsx';

const Sidebar = React.createClass({
	render() {
		return <div className = 'component sidebar'>
			<Controls state = {this.props.state}/>
			<SlideTypeChooser state = {this.props.state}/>
		</div>;
	}
});

export default Sidebar;
