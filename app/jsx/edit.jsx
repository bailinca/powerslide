import React from 'react';
import CurrentSlide from './current-slide/current-slide.jsx';
import Sidebar from './sidebar/sidebar.jsx';

const Edit = React.createClass({
	render() {
		return <div>
			Edit
			<CurrentSlide />
			<Sidebar />
		</div>;
	}
});

export default Edit;
