import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onRest, onDelete, onIncrement, onDecrement, counters } = this.props;
    return (
      <div>
        <button onClick={onRest} className="btn btn-success m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter._id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onRest={onRest}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
