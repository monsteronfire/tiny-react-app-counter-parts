import React from 'react';
import CounterButton from './CounterButton';
import CounterInput from './CounterInput';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <div className='counter'>
        <h1>{this.state.count}</h1>
        <CounterButton/>
        <CounterButton/>
        <CounterInput/>
      </div>
    )
  }
}

export default Counter;
