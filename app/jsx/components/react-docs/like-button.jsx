import React from 'react';

var LikeButton = React.createClass({
	getInitialState() {
		return {liked: false};
	},
	handleClick() {
		this.setState({
			liked: !this.state.liked
		});
	},
	render() {
		return (
			<p onClick={this.handleClick}>
				You {this.state.liked ? 'like ' : 'haven\'t liked '}
				this. Click to toggle.
			</p>
		);
	}
});

export default LikeButton;
