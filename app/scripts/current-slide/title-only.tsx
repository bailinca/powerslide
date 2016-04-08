import * as React from 'react';
import Title from './title.tsx';

class TitleOnly extends React.Component<IGenericProps, IGenericState> {
	render(): React.ReactElement<HTMLDivElement> {
		return <div className = 'component title-only'>
			<Title
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
		</div>;
	}
};

export default TitleOnly;
