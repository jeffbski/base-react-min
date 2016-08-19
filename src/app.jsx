import React, { Component } from 'react';

class App extends Component {
  render() {
    const { items } = this.props;
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
