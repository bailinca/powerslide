import React from 'react';
import Title from './title.jsx';
import Pic from './pic.jsx';

const TitlePic = React.createClass({
	render() {
		return <div className = 'component title-pic'>
			<Title
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<Pic state = {this.props.state} />
		</div>;
	}
});

export default TitlePic;
