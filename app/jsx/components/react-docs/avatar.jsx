import React from 'react';

var Avatar = React.createClass({
	propTypes: {
		pagename: React.PropTypes.string.isRequired
	},
	render() {
		return (
			<div>
				<PagePic {...this.props}/>
				<PageLink {...this.props}/>
			</div>
		);
	}
});

var PagePic = React.createClass({
	propTypes: {
		pagename: React.PropTypes.string.isRequired
	},
	render() {
		return (
			<img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'}/>
		);
	}
});

var PageLink = React.createClass({
	propTypes: {
		pagename: React.PropTypes.string.isRequired
	},
	render() {
		return (
			<a href={'https://www.facebook.com/' + this.props.pagename}>
				{' '} {this.props.pagename}
			</a>
		);
	}
});

export default Avatar;
