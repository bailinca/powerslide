import * as React from 'react';
import SidebarTitleText from './sidebar-title-text.tsx';
import SidebarTitlePic from './sidebar-title-pic.tsx';
import SidebarTitleOnly from './sidebar-title-only.tsx';

class SlideTypeChooser extends React.Component<IGenericProps, IGenericState> {
	clickHandler(): void {
		this.props.updateAppState({
			'sidebar': 'controls'
		});
	}
	addSlide(type: string): void {
		let slides: {}[] = this.props.state.slides;
		slides.splice(this.props.state.currentSlide + 1, null, {type});
		this.props.updateAppState({
			slides,
			'currentSlide': this.props.state.currentSlide + 1
		});
	}
	render(): React.ReactElement<HTMLDivElement> {
		return <div className = 'component slide-type-chooser'
			onClick = {this.clickHandler.bind(this)}>

			<SidebarTitleText
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
				addSlide = {this.addSlide.bind(this)}
			/>
			<SidebarTitlePic
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
				addSlide = {this.addSlide.bind(this)}
			/>
			<SidebarTitleOnly
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
				addSlide = {this.addSlide.bind(this)}
			/>
		</div>;
	}
};

export default SlideTypeChooser;
