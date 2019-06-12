import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class CartItem extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        onPlusClick: PropTypes.func.isRequired
      }
    render() {
      return(
          <li id={this.props.id}>{this.props.name} {this.props.price} EUR, quantity: {this.props.quantity}<button onClick={this.props.onPlusClick} type='button'>+</button></li>
      )
    }
}