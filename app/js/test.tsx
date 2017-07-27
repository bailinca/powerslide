/// <reference path="./interfaces.d.ts"/>

import * as React from 'react';
import { expect } from 'chai';
import * as ReactTestUtils from 'react-dom/test-utils';

import Text from './current-slide/text';

describe('Text Component', () => {
  it('has correct type', () => {
    expect(ReactTestUtils.isElementOfType(<Text />, Text)).to.equal(true);
  });
});
