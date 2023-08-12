import React, { useState } from "react";
import {useParams ,useNavigate} from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import { getproducts, updateproducts } from "../Redux/action";
import { GET_PRODUCTS_SUCCESS } from "../Redux/actionTypes";

const Editpage = () => {
  const {id}=useParams()
  //console.log(id);
  const products=useSelector((store)=>store.products)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const current=products.find((item)=>item.id==id);
 // console.log(current);

  const [title,setTitle]=useState(current?.title)
  const [price,setPrice]=useState(current?.price)
  //console.log(products);

  const handleUpdate = () => {
    const payload = {
      title: title,
      price: price,
    };

    dispatch(updateproducts(payload, id))
      .then(() => dispatch(getproducts()))
      .then((res) => {
       console.log(res);
       if(res=GET_PRODUCTS_SUCCESS){
        navigate("/")
       }
      });
  };
  return (
    <div style={{ width: "fit-content", margin: "auto", fontSize: "20px" }}>
      <h3>Edit page</h3>
      <div>
        <label>Product Title</label>
        <input data-cy="edit-product-title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div>
        <label>Product Price</label>
        <input data-cy="edit-product-price" type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
      </div>
      <div style={{ textAlign: "right", padding: "5px 0" }}>
        <button data-cy="update-button" onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default Editpage;
