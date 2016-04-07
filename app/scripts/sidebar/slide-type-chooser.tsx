import * as React from 'react';
import SidebarTitleText from './sidebar-title-text.tsx';
import SidebarTitlePic from './sidebar-title-pic.tsx';
import SidebarTitleOnly from './sidebar-title-only.tsx';

class SlideTypeChooser extends React.Component<IGenericProps, IGenericState> {
	constructor(props) {
		super(props);
	}
	clickHandler() {
		this.props.updateAppState({
			'sidebar': 'controls'
		});
	}
	addSlide(type) {
		let slides = this.props.state.slides;
		slides.splice(this.props.state.currentSlide + 1, null, {type});
		this.props.updateAppState({
			slides,
			'currentSlide': this.props.state.currentSlide + 1
		});
	}
	render() {
		return <div className = 'component slide-type-chooser'
			onClick = {this.clickHandler.bind(this)}>

			<SidebarTitleText
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
				addSlide = {this.addSlide}
			/>
			<SidebarTitlePic
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
				addSlide = {this.addSlide}
			/>
			<SidebarTitleOnly
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
				addSlide = {this.addSlide}
			/>
		</div>;
	}
};

export default SlideTypeChooser;
