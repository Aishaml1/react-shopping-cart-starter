import React from 'react';

function AllTheThings(props) {

  const allItems = props.products.map((element, index) => {
    return (
      <li key={index}
        onClick={() => props.handleClick(element)} >
        <b> {element.name}  </b>
        {'$' + element.price} <br />
        <i> {element.description} </i>
      </li>
    )
  })

  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <p> {allItems} </p>
    </div>
  );
}

export default AllTheThings;
