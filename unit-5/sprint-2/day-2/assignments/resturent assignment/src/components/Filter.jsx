


// import Restorent from ".../"
import { Button } from "antd";

export const Filter = ({ handleSort }) => {
  return (
    <div className="control">
      <Button type="primary" onClick={() => handleSort("prize", 1)}>
        Price-Low to High
      </Button>
      <Button type="primary" onClick={() => handleSort("prize", -1)}>
        Price-High to Low
      </Button>
      <br />
      <Button onClick={() => handleSort("rating", 5)}>Rating-5 star</Button>
      <Button onClick={() => handleSort("rating", 4)}>Above 4 star</Button>
      <Button onClick={() => handleSort("rating", 3)}>Above 3 star</Button>
      <Button onClick={() => handleSort("rating", 2)}>Above 2 star</Button>
      <Button onClick={() => handleSort("rating", 1)}>Above 1 star</Button>
    </div>
  );
};
