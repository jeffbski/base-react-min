'use strict';

import { expect, React, ReactDOM, TestUtils } from './util/karma-setup';
const { renderIntoDocument, Simulate } = TestUtils;

import App from './app';
const DATA = require('../public/fake-api.json');

describe('items', function () {

  let renderedComp;
  let domNode;
  beforeEach(() => {
    renderedComp = renderIntoDocument(
      <App items={DATA.items} />
    );
    domNode = ReactDOM.findDOMNode(renderedComp);
  });

  it('should display all items', function () {
    Simulate.click(domNode); // can click on or change things
    const li = domNode.querySelectorAll('.items li');
    expect(li.length).toBe(DATA.items.length);
  });

});
