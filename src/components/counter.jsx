import React, { Component } from 'react';

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount(){
    console.log("Counter - Unmount")
  }


  render() { 
    console.log("Counter - Rendered")
    let classes = this.getBadgeClasses();
    let disabledBool = this.getDisabledBoolean();

    return (

      <div className="container row">
        <div className="col-1">
          <span className={ classes }>{this.formatValue()}</span>
        </div>
        <div className="col">
          <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
          <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2" disabled={disabledBool}>-</button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">X</button>
        </div>
      </div>
    );
  }
  
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }

  getDisabledBoolean() {
    return this.props.counter.value === 0;
  }

  formatValue() {
    const {value} = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

}
 
export default Counter;