import './util/polyfill'; // first import polyfills
import React from 'react';
import ReactDOM from 'react-dom';
import httpClient from 'axios';
import App from './app';

/*
  Example which fetches a list of items from a REST api
  and renders it to the screen. Also logs and renders
  renders the error message if one occurs.
 */


const appContainerDiv = document.querySelector('#appContainer');

function render(data) {
  ReactDOM.render(<App items={data.items} />, appContainerDiv);
}

function renderError(err) {
  const errMsg = (err.statusText) ?
                 `Error: ${err.data} - ${err.statusText}` :
                 err.toString();
  ReactDOM.render(<div>{errMsg}</div>, appContainerDiv);
}

function fetchData() {
  return httpClient({ url: '/fake-api.json' });
}

function fetchDataAndRender() {
  fetchData()
    .then(resp => render(resp.data))
    .catch(err => {
      console.error(err); // eslint-disable-line no-console
      renderError(err);
    });
}

fetchDataAndRender();
