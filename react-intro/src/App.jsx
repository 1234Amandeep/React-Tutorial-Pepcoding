import "./style.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrementCount() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div className="container">
        <h2>{this.state.count}</h2>
        <div>
          <button onClick={() => this.incrementCount()}>+</button>
          <button onClick={() => this.decrementCount()}>-</button>
        </div>
      </div>
    );
  }
}

export default App;
