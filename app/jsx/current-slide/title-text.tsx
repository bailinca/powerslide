/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';
import Title from './title.tsx';
import Text from './text.tsx';

const TitleText = React.createClass<IGenericProps, IGenericState>({
	render() {
		return <div className = 'component title-text'>
			<Title
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<Text
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
		</div>;
	}
});

export default TitleText;
