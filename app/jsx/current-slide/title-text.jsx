import React from 'react';
import Title from './title.jsx';
import Text from './text.jsx';

const TitleText = React.createClass({
	render() {
		return <div className = 'title-text'>
			TitleText
			<Title />
			<Text />
		</div>;
	}
});

export default TitleText;
