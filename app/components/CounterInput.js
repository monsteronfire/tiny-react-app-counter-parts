import React from 'react';

class CounterInput extends React.Component {
  render() {
    return (
      <div className='counter-input'>
        <input type='number' value={this.props.value} onChange={this.props.onChange} />
      </div>
    )
  }
}

export default CounterInput;
