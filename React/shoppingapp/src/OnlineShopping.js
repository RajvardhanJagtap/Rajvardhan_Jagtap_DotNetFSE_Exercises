import React, { Component } from 'react';
import Cart from './Cart';
import CartModel from './models/Cart';

class OnlineShopping extends Component {
  state = {
    items: [
      new CartModel('Laptop', 65000),
      new CartModel('Phone', 25000),
      new CartModel('Headphones', 5000),
      new CartModel('Keyboard', 3500),
      new CartModel('Mouse', 1200),
    ],
  };

  render() {
    return (
      <section>
        <h2>Online Shopping Cart</h2>
        <table className="table-card">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item) => (
              <Cart key={item.ItemName} item={item} />
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

export default OnlineShopping;