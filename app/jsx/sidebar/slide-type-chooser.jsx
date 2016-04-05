import React from 'react';
import SidebarTitleText from './sidebar-title-text.jsx';
import SidebarTitlePic from './sidebar-title-pic.jsx';
import SidebarTitleOnly from './sidebar-title-only.jsx';

const SlideTypeChooser = React.createClass({
	clickHandler() {
		this.props.updateAppState({
			'sidebar': 'controls'
		});
	},
	addSlide(type) {
		let slides = this.props.state.slides;
		slides.splice(this.props.state.currentSlide + 1, null, {type});
		this.props.updateAppState({
			slides,
			'currentSlide': this.props.state.currentSlide + 1
		});
	},
	render() {
		return <div className = 'component slide-type-chooser'
			onClick = {this.clickHandler}>

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
});

export default SlideTypeChooser;
