import React from 'react';
import Title from './title.jsx';

const TitleOnly = React.createClass({
	render() {
		return <div className = 'component title-only'>
			<Title
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
		</div>;
	}
});

export default TitleOnly;
