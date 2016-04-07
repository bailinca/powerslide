/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';
import Title from './title.tsx';

const TitleOnly = React.createClass<IGenericProps, IGenericState>({
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
