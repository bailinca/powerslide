import React from 'react';
import Title from './title.jsx';
import Text from './text.jsx';

const TitleText = React.createClass({
	render() {
		return <div className = 'component title-text'>
			<Title state = {this.props.state} changeHandler = {this.props.changeHandler}/>
			<Text state = {this.props.state} changeHandler = {this.props.changeHandler}/>
		</div>;
	}
});

export default TitleText;
