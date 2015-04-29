'use strict';

import React, { Component } from 'react';
import http from 'iso-http';

const mainContentDiv = document.querySelector('#appContainer');

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

function render(data) {
  React.render(<App items={data.items} />, mainContentDiv);
}

function fetchData(cb) {
  http.request({ url: '/fake-api.json' }, resp => {
    if (status > 399) { return cb(new Error(resp.text)); }
    try {
      const data = JSON.parse(resp.text);
      return cb(null, data);
    } catch (err) {
      return cb(new Error(err));
    }
  });
}

fetchData(function (err, data) {
  if (err) { return console.error(err); }
  render(data);
});
