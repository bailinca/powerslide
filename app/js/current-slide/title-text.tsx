import * as React from 'react';

import Title from './title';
import Text from './text';

class TitleText extends React.Component<IGenericProps, {}> {
	render(): React.ReactElement<HTMLDivElement> {
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
};

export default TitleText;
