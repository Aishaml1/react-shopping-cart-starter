import React from 'react';

function MyShoppingCart(props) {
let allItems = props.cart.map((product, i) => {
  return (
    <li key={i} onClick={() => props.handleClick(i)}>
      <b> {product.name}  </b>
        {'$' + product.price} <br />
        <i> {product.description} </i>
    </li>
  );
});

return (
  <div className="MyShoppingCart">
    <h2>Your Cart!</h2>
    <ul>
      {allItems}
    </ul>
  </div>
);
}

export default MyShoppingCart;
