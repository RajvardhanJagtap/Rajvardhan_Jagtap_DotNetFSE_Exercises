import React from 'react';

function Cart({ item }) {
  return (
    <tr>
      <td>{item.ItemName}</td>
      <td>{item.Price}</td>
    </tr>
  );
}

export default Cart;