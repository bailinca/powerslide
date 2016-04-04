import React from 'react';
import PresentBtn from './present-btn.jsx';
import AddSlide from './add-slide.jsx';
import RemoveSlide from './remove-slide.jsx';
import PrevSlide from './prev-slide.jsx';
import NextSlide from './next-slide.jsx';

const Controls = React.createClass({
	render() {
		return <div className = 'component controls'>
			<PresentBtn />
			<AddSlide />
			<RemoveSlide />
			<PrevSlide />
			<NextSlide />
		</div>;
	}
});

export default Controls;
