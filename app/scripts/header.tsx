import * as React from 'react';

class Header extends React.Component<any, any>{
	constructor(props) {
		super(props);
	}
	render() {
		return <div className = 'component header'>
			<h1>Powerslide</h1>
		</div>;
	}
};

export default Header;