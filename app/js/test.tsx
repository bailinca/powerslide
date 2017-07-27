/// <reference path="./interfaces.d.ts"/>

import * as React from 'react';
import { expect } from 'chai';
import * as TestUtils from 'react-addons-test-utils';

import Text from './current-slide/text';

describe('Text Component', () => {
  it('has correct type', () => {
    expect(TestUtils.isElementOfType(<Text />, Text)).to.equal(true);
  });
});

describe('Text Component tree', () => {
  it('has correct number of elements', () => {
    const component:
      | React.Component<IGenericProps, {}>
      | Element
      | void = TestUtils.renderIntoDocument(<Text />);

    const allDivs: (
      | Element
      | React.Component<IGenericProps | {}, IAppState | {}>)[] = TestUtils.findAllInRenderedTree(
      component as React.Component<IGenericProps, {}>,
      (c: React.Component<{}, {}> | Element) => !!c
    );
    expect(allDivs.length).to.equal(3);
  });
});