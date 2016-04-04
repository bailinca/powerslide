import React from 'react';
import CurrentSlide from './current-slide/current-slide.jsx';
import Sidebar from './sidebar/sidebar.jsx';

const Edit = React.createClass({
	render() {
		return <div className = 'component edit'>
			<CurrentSlide
				state = {this.props.state}
				changeHandler = {this.props.currentSlideChangeHandler}
			/>
			<Sidebar
				state = {this.props.state}
				changeHandler = {this.props.sideBarChangeHandler}
			/>
		</div>;
	}
});

export default Edit;
