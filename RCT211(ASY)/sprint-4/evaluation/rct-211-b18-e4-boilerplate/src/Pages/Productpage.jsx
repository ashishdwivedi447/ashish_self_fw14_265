import React, { useEffect } from "react";
import { getproducts } from "../Redux/action";

import { useSelector,useDispatch } from "react-redux/es/exports";

import ProductCard from "../Components/ProductCard";
const Productpage = () => {

  const products=useSelector((store)=>store.products)
  const dispatch=useDispatch();

  useEffect(()=>{
   dispatch(getproducts())
  },[])

  //console.log(products);
  return (
    <div style={{ width: "100%" }}>
      <div>
        
    
    { products.map((item)=>(
  <ProductCard item={item}/>
     ))
    }
      </div>
    </div>
  );
};

export default Productpage;

    {/* 1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params  */}