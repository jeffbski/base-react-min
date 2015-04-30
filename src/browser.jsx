'use strict';

import './util/polyfill'; // first import polyfills
import React from 'react';
import httpClient from 'axios';

/*
  Example which fetches a list of items from a REST api
  and renders it to the screen. Also logs and renders
  renders the error message if one occurs.
 */

class App extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div>
        <ul>
          { items.map(item =>
            <li key={item.id}>{item.name}</li>) }
        </ul>
        <div className="devHelp">(REST data fetched and rendered in src/browser.jsx)</div>
      </div>
    );
  }
}

const appContainerDiv = document.querySelector('#appContainer');

function render(data) {
  React.render(<App items={data.items} />, appContainerDiv);
}

function renderError(err) {
  const errMsg = (err.statusText) ?
                 `Error: ${err.data} - ${err.statusText}` :
                 err.toString();
  React.render(<div>{errMsg}</div>, appContainerDiv);
}

function fetchData() {
  return httpClient({ url: '/fake-api.json' });
}

function fetchDataAndRender() {
  fetchData()
    .then(resp => render(resp.data))
    .catch(err => {
      console.error(err);
      renderError(err);
    });
}

fetchDataAndRender();
