import React from "react";
import {Link} from "react-router-dom"

const WatchCard = ({ id ,watchdata}) => {
  return (
    <Link to={`/watches/${watchdata.id}`}>
    <div data-testid={`watch-card-wrapper-${id}`}>
      <div>
        <img data-testid="watch-card-image" src={watchdata.image} alt="" />
      </div>
      <div>
        <div data-testid="watch-name">{watchdata.name}</div>
        <div data-testid="watch-category">{watchdata.category}</div>
      </div>
    </div>
    </Link>
  );
};

export default WatchCard;
