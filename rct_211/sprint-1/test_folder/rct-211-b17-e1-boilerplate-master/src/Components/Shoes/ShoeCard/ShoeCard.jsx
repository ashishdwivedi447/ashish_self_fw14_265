import React from "react";

const ShoeCard = ({shoedata}) => {
  const shoeId = null;

  // const[cart_quantity,setCart_quantity]=useState(shoedata.cart_quantity)
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}>
      <img data-cy="shoe-card-image" alt="shoe"  src={shoedata.image}/>
      <div>
        <div data-cy="shoe-name">{shoedata.name}</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">{shoedata.cart_quantity}</div>
          <button data-cy="increment-shoe-count-button" >+</button>
          <button data-cy="decrement-shoe-count-button">-</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
