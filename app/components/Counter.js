import React from 'react';
import CounterButton from './CounterButton';
import CounterInput from './CounterInput';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: 1
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  increment() {
    this.setState(() => {
      return {
        count: this.state.count + 1
      };
    });
  }

  decrement() {
    this.setState(() => {
      return {
        count: this.state.count - 1
      };
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className='counter'>
        <h1>{this.state.count}</h1>
        <CounterButton text="+" onClick={this.increment} />
        <CounterButton text="-" onClick={this.decrement} />
        <CounterInput value={this.state.value} onChange={this.handleChange} />
      </div>
    )
  }
}

export default Counter;
