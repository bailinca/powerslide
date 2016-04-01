import React from 'react';

var RefUsage = React.createClass({
	handleClick() {
		if (this.myTextInput) {
			// Explicitly focus the text input using the raw DOM API.
			this.myTextInput.focus();
		}
	},
	render() {
		// The ref attribute is a callback that saves a reference to the
		// component to this.myTextInput when the component is mounted.
		return (
			<div>
				<input
					type="text"
					ref={(refToInput) => {
						this.myTextInput = refToInput;
					}}/>
				<input
					type="button"
					value="Focus the text input"
					onClick={this.handleClick}/>
			</div>
		);
	}
});

export default RefUsage;
