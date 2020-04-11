import React, { Component } from "react";

class Countetr extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-1">
          <span className={this.getBadgeColor()}>{this.formateCount()}</span>
        </div>
        <div className="col-md-2">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"> + </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2" disabled={this.props.counter.value === 0 ? "disabled" : ""}> - </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter._id)}
            className="btn btn-danger btn-sm m-2"> X </button>
        </div>

        {/* <ul>
          {this.props.counter.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeColor() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Countetr;
