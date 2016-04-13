import * as React from 'react';

import Title from './title.tsx';
import Pic from './pic.tsx';

class TitlePic extends React.Component<IGenericProps, {}> {
	render(): React.ReactElement<HTMLDivElement> {
		return <div className = 'component title-pic'>
			<Title
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<Pic
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
		</div>;
	}
};

export default TitlePic;
