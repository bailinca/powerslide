import * as React from 'react';

import TitleText from './title-text.tsx';
import TitlePic from './title-pic.tsx';
import TitleOnly from './title-only.tsx';

class CurrentSlide extends React.Component<IGenericProps, {}> {
	render(): React.ReactElement<HTMLDivElement> {
		const type: string = this.props.state.slides[this.props.state.currentSlide].type;
		return <div className = 'component current-slide'>
			{
				type === 'titleText' ?
					<TitleText
						state = {this.props.state}
						updateAppState = {this.props.updateAppState}
					/> : type === 'titlePic' ?
					<TitlePic
						state = {this.props.state}
						updateAppState = {this.props.updateAppState}
					/> :
					<TitleOnly
						state = {this.props.state}
						updateAppState = {this.props.updateAppState}
					/>
			}
			{
				this.props.state.view === 'edit' ?
				<h3>
					{this.props.state.currentSlide + 1 + ' / ' +
						this.props.state.slides.length}
				</h3> : null
			}
		</div>;
	}
};

export default CurrentSlide;
