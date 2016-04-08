import * as React from 'react';

class Title extends React.Component<IGenericProps, IGenericState> {
	changeHandler(e: any): void {
		let slides: any = this.props.state.slides;
		slides[this.props.state.currentSlide].title = e.target.value;
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
