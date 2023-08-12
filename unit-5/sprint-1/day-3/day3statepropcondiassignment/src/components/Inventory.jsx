import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });

  console.log(useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  }))
    // Create add and remove functions here that changes the
    // state.

    const handelchangebook=(value)=>{
      if(inv.books<=0 && value===-1){
        return;
      }
      setInv({ books : inv.books+value,notebooks: inv.notebooks, pens: inv.pens}
        );
    }

    const handelchangenotebook=(value)=>{

      if(inv.notebooks<=0 && value===-1){
        return;
      }
      setInv({ books : inv.books,notebooks: inv.notebooks+value, pens: inv.pens}
        );
    }

    const handelchangepen=(value)=>{

      if(inv.pens<=0 && value===-1){
        return;
      }
      setInv({ books : inv.books,notebooks: inv.notebooks, pens: inv.pens +value}
        );
    }

    
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton"  onClick={()=>{
          handelchangebook(1)}}>+</button>
        <button className="circlularButton" onClick={()=>{
          handelchangebook(-1)}}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>{
          handelchangenotebook(1)}}>+</button>
        <button className="circlularButton"  onClick={()=>{
          handelchangenotebook(-1)}}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>{
          handelchangepen(1)}}>+</button>
        <button className="circlularButton"  onClick={()=>{
          handelchangepen(-1)}}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.pens+inv.notebooks}
    </div>
  );
};
