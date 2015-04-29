'use strict';

import React, { Component } from 'react';
import httpClient from 'axios';

class App extends Component {
  render() {
    const items = this.props.items;
    return (
      <div>
        <ul>
          { items.map(item =>
            <li key={item.id}>{item.name}</li>) }
        </ul>
        <div className="devHelp">(from src/browser.jsx)</div>
      </div>
    );
  }
}

const mainContentDiv = document.querySelector('#appContainer');

function render(data) {
  React.render(<App items={data.items} />, mainContentDiv);
}

function renderError(err) {
  const errMsg = (err.statusText) ?
                 `Error: ${err.data} - ${err.statusText}` :
                 err.toString();
  React.render(<div>{errMsg}</div>, mainContentDiv);
}

function fetchData() {
  return httpClient({ url: '/fake-api.json' });
}

fetchData()
  .then(resp => render(resp.data))
  .catch(err => {
    console.error(err);
    renderError(err);
  });
