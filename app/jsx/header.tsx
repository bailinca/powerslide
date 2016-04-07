/// <reference path="./interfaces.d.ts"/>

import * as React from 'react';

const Header = React.createClass<IGenericProps, IGenericState>({
	render() {
		return <div className = 'component header'>
			<h1>Powerslide</h1>
		</div>;
	}
});

export default Header;
