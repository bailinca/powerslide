import * as React from 'react';

class Pic extends React.Component<IGenericProps, IGenericState> {
	changeHandler(e) {
		let slides = this.props.state.slides;
		slides[this.props.state.currentSlide].url = e.target.value;
		this.props.updateAppState({slides});
	}
	render() {
		const url = this.props.state.slides[this.props.state.currentSlide].url;
		return <div
				className = 'component pic'
				style = {{'backgroundImage': `url(${url})`}}
			>
			<input
				value =	{this.props.state.slides[this.props.state.currentSlide].url}
				onChange = {this.changeHandler.bind(this)}
				placeholder = {'...Image url'}
			/>
		</div>;
	}
};

export default Pic;
