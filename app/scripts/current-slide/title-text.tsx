import * as React from 'react';
import Title from './title.tsx';
import Text from './text.tsx';

class TitleText extends React.Component<IGenericProps, IGenericState> {
	constructor(props) {
		super(props);
	}
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
};

export default TitleText;
