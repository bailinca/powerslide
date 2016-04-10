import * as React from 'react';

class Title extends React.Component<IGenericProps, {}> {
	changeHandler(e: React.SyntheticEvent): void {
		let slides: ISlide[] = this.props.state.slides;
		slides[this.props.state.currentSlide].title = (e.target as HTMLInputElement).value;
		this.props.updateAppState(slides);
	}
	render(): React.ReactElement<HTMLDivElement> {
		return <div className = 'component title'>
			<input
				value =	{this.props.state.slides[this.props.state.currentSlide].title}
				onChange = {this.changeHandler.bind(this)}
				disabled = {this.props.state.view === 'edit' ? false : true}
			/>
		</div>;
	}
};

export default Title;
