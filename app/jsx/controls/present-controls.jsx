import React from 'react';
import EditBtn from './edit-btn.jsx';
import PrevNext from './prev-next.jsx';

const PresentControls = React.createClass({
	render() {
		return <div className = 'component present-controls'>
			{
				this.props.state.view === 'present' ?
				<h3>
					{this.props.state.currentSlide + 1 + ' / ' +
						this.props.state.slides.length}
				</h3> : null
			}
			<PrevNext
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
			<EditBtn
				state = {this.props.state}
				updateAppState = {this.props.updateAppState}
			/>
		</div>;
	}
});

export default PresentControls;
