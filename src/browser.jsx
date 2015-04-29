'use strict';

import React, { Component } from 'react';

const mainContentDiv = document.querySelector('#appContainer');

class App extends Component {
  render() {
    return (
      <div>App content</div>
    );
  }
}

function render() {
  React.render(<Handler/>, mainContentDiv);
}

render();
