import React from "react";

const ShoeCard = ({shoeData}) => {
  let shoeId = shoeData.id
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}>
      <div>
        <img data-cy="shoe-card-image" src={shoeData.image} alt="" style={{heigth:"180px",width:"250px"}}/>
      </div>
      <div>
        <div data-cy="shoe-name">{shoeData.name}</div>
        <div data-cy="shoe-category">{shoeData.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
