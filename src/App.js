import React, { Component } from 'react';
import CartItem from './components/CartItem'
import CheckoutButton from './components/CheckoutButton'
import MyClock from './components/MyClock'

import './App.css';

class App extends Component {
  state = {
    products : [
      {
          id: 1,
          name: "Prada Shoes",
          price: 570,
          quantity:0 
      },
      {
          id: 2,
          name: "Rolex Watch",
          price: 649,
          quantity:0 
      },
      {
          id: 3,
          name: "Paper clips",
          price: 0.1,
          quantity:0 
          
      }
    ],
    price: 0
  }
  incrementQuantity = (productId) => {
    //devo controllare se l'id e identico all'id passato
    const addQuantity = this.state.products
      .map(product => {
        if (product.id === productId){
          product.quantity += 1
        }
        return product
      })
    
   this.setState({ products: addQuantity })
    

  }
  renderCartItem = (products) => {
    return <CartItem 
      name={products.name} 
      price={products.price}
      id={products.id}
      key={products.id}
      quantity={products.quantity}
      onPlusClick={() => this.incrementQuantity(products.id)} 
      // also good : onPlusClick={this.incrementQuantity.bind(this, products.id)}
      />
  }

  sumPrice = () => {
    const tot = this.state.products.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity
    },0)
    this.setState({ price:  tot})
  }

  render() {
    return (
      <div className="App">
        <MyClock />
        <ul>
          {
            this.state.products.map(this.renderCartItem)
          }
        </ul>
        <p>Total <b>{this.state.price}</b> Euro</p>
        <CheckoutButton checkOutClick={this.sumPrice} />
      </div>
    );
  }
}

export default App;
