import React from 'react';
import TitleText from './title-text.jsx';
import TitlePic from './title-pic.jsx';
import TitleOnly from './title-only.jsx';

const CurrentSlide = React.createClass({
	render() {
		return <div>
			CurrentSlide
			<TitleText />
			<TitlePic />
			<TitleOnly />
		</div>;
	}
});

export default CurrentSlide;
