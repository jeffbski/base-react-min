import { expect, React, ReactDOM, TestUtils } from './util/karma-setup';
import App from './app';

const { renderIntoDocument, Simulate } = TestUtils;
const DATA = require('../public/fake-api.json');

describe('items', () => {

  let renderedComp;
  let domNode;
  beforeEach(() => {
    renderedComp = renderIntoDocument(
      <App items={DATA.items} />
    );
    domNode = ReactDOM.findDOMNode(renderedComp);
  });

  it('should display all items', () => {
    Simulate.click(domNode); // can click on or change things
    const li = domNode.querySelectorAll('.items li');
    expect(li.length).toBe(DATA.items.length);
  });

});
