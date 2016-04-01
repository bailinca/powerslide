import '../css/main.css';
import React from 'react';
import {render} from 'react-dom';
import FilterableProductTable from './components/react-tutorial/filterable-product-table';
import HelloWorld from './components/react-docs/hello-world';
import LikeButton from './components/react-docs/like-button';
import Avatar from './components/react-docs/avatar';
import TickTock from './components/react-docs/tick-tock';
import RefUsage from './components/react-docs/ref-usage';

((function() {
	/* ------------ FilterableProductTable --------------- */
	var FilterableProductTableElement = document.createElement('div');
	document.body.appendChild(FilterableProductTableElement);
	render(<FilterableProductTable/>, FilterableProductTableElement);

	/* ------------- HelloWorld ------------------- */
	var helloWorldElement = document.createElement('div');
	document.body.appendChild(helloWorldElement);
	setInterval(function() {
		render(<HelloWorld date={new Date()}/>, helloWorldElement);
	}, 500);

	/* ------------- LikeButton ------------------- */
	var likeButtonElement = document.createElement('div');
	document.body.appendChild(likeButtonElement);
	render(<LikeButton/>, likeButtonElement);

	/* ------------- Avatar ------------------- */
	var AvatarElement = document.createElement('div');
	document.body.appendChild(AvatarElement);
	render(<Avatar pagename="HardwellOnAir"/>, AvatarElement);

	/* ------------- TickTock ------------------- */
	var TickTockElement = document.createElement('div');
	document.body.appendChild(TickTockElement);
	render(<TickTock/>, TickTockElement);

	/* ------------- RefUsage ------------------- */
	var RefUsageElement = document.createElement('div');
	document.body.appendChild(RefUsageElement);
	render(<RefUsage/>, RefUsageElement);
})());
