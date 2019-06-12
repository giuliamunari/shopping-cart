import React, { Component } from 'react';
import PropTypes from 'prop-types'


export default class CheckoutButton extends Component {
  static propTypes = {
    checkOutClick: PropTypes.func.isRequired
  }
  render() {
    return(
      <div className="button">
        <button type="button" onClick={this.props.checkOutClick}>Checkout</button>
      </div>
    )
  }
}