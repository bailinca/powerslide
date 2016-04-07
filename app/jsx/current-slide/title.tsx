/// <reference path="../interfaces.d.ts"/>

import * as React from 'react';

class Title extends React.Component<IGenericProps, IGenericState>{
	constructor(props) {
		super(props);
	}
	changeHandler(e) {
		let slides = this.props.state.slides;
		slides[this.props.state.currentSlide].title = e.target.value;
		this.props.updateAppState(slides);
	}
	render() {
		return <div className = 'component title'>
			<input
				value =	{this.props.state.slides[this.props.state.currentSlide].title}
				onChange = {this.changeHandler}
				disabled = {this.props.state.view === 'edit' ? false : true}
			/>
		</div>;
	}
};

export default Title;
