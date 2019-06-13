import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  render() {
    let countClass = "badge m-2 badge-";
    countClass += this.state.count === 0 ? "warning" : "primary";
    return (
      <React.Fragment>
        {/* ghost div */}
        <span className={countClass}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
