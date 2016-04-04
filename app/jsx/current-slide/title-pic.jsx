import React from 'react';
import Title from './title.jsx';
import Pic from './pic.jsx';

const TitlePic = React.createClass({
	render() {
		return <div className = 'component title-pic'>
			TitlePic
			<Title />
			<Pic />
		</div>;
	}
});

export default TitlePic;
