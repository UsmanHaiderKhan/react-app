import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { _id: 1, value: 3 },
      { _id: 2, value: 0 },
      { _id: 3, value: 0 },
      { _id: 4, value: 0 },
    ],
  };

  //   Rest Function
  handleRest = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  //   Delete Function
  handleDelete = (counterId) => {
    console.log("Event IS Rasied", counterId);
    const counters = this.state.counters.filter((c) => c._id !== counterId);
    this.setState({ counters });
  };
  //   Handle Increment Function
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    // console.log(this.state.counters[index]);
  };
  // Handle Decrement
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounter={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onRest={this.handleRest}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
