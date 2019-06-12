import React, { Component } from 'react';
import CartItem from './components/CartItem'
import CheckoutButton from './components/CheckoutButton'

import './App.css';

class App extends Component {
  state = {
    products : [
      {
          id: 1,
          name: "Prada Shoes",
          price: 570
      },
      {
          id: 2,
          name: "Rolex Watch",
          price: 649
      },
      {
          id: 3,
          name: "Paper clips",
          price: 0.1
      }
    ]
  }
  incrementQuantity = (productId) => {
    console.log('id',productId)
    return productId
  }
  renderCartItem = (products) => {
    return <CartItem 
      name={products.name} 
      price={products.price}
      id={products.id}
      key={products.id}
      onPlusClick={products.incrementQuantity} 
      />
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.products.map(this.renderCartItem)
          }
        </ul>
        <CheckoutButton  />
      </div>
    );
  }
}

export default App;
