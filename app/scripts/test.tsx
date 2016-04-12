/// <reference path='../../typings/main.d.ts'/>
/// <reference path="./interfaces.d.ts"/>

import * as React from 'react';
import * as TestUtils  from 'react-addons-test-utils';
import Text from './current-slide/text';
import * as defaultState from './defaultState.ts';

describe('Text Component', () => {
	it('has correct type', () => {
		expect(TestUtils.isElementOfType(
			<Text
				state = {defaultState}
				updateAppState = {() => 0}
			/>,
			Text)).toBe(true);
	});
});

describe('Text Component tree', () => {
	it('has correct number of elements', () => {
		const component: React.Component<IGenericProps, {}> |Element | void =
			TestUtils.renderIntoDocument(<Text
				state = {defaultState}
				updateAppState = {() => 0}
			/>);

		const allDivs: (Element | React.Component<IGenericProps | {}, IAppState | {}>)[] =
			TestUtils.findAllInRenderedTree(
				component as React.Component<IGenericProps, {}>,
				(c: React.Component<{}, {}> | Element) => true
		);
		expect(allDivs.length).toBe(3);
	});
});
