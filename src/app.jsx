'use strict';

import React from 'react';

class App extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div>
        <ul className="items">
          { items.map(item =>
            <li key={item.id}>{item.name}</li>) }
        </ul>
        <div className="devHelp">(REST data rendered in src/app.jsx)</div>
      </div>
    );
  }
}

export default App;
