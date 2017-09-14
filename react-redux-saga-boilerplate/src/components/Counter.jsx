import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {

  render() {
    const { value, onClickIncrementButton, onClickDcrementButton } = this.props;
    return (
      <div>
        <button onClick={() => { onClickIncrementButton(); }}>+</button>
        <button onClick={() => { onClickDcrementButton(); }}>-</button>
        <span>{value}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onClickIncrementButton: PropTypes.func.isRequired,
  onClickDcrementButton: PropTypes.func.isRequired
}