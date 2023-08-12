import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const {id}=useParams()   //it is used to Read the parameter.

  const [product,setProduct]=useState({});
  
  useEffect(()=>{
    fetch(`http://localhost:8080/data/${id}`)
    .then((r)=>r.json())
    .then((d)=>setProduct(d));
  },[id])
  return (
    <div>ProductsDetails
      <div>Product:{id}</div>
      <div>{product.name}</div>

    </div>
  )
}

export default Product