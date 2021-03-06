import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  

  render() { 
    console.log("Counters - Rendered")
    const { onReset, onIncrement, onDecrement, onDelete, counters } = this.props;

    return ( 
    <div> 
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
      {counters.map(counter => <Counter key={counter.id} counter={counter} onDecrement={onDecrement} onIncrement={onIncrement} onDelete={onDelete}/>)}
    </div> );
  }
}
 
export default Counters;