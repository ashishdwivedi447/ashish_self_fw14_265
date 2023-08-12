import React, { useState } from "react";
import { addproducts } from "../Redux/action";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const AddProduct = () => {

  const [productData,setProductData]=useState({});
  const navigate=useNavigate()
  const dispatch=useDispatch()
  

  const handlechange=(e)=>{
    const {name,value}=e.target;

    setProductData({...productData,[name]:value})
  }

  const handleclick=()=>{
    console.log(productData)
dispatch(addproducts(productData))
navigate("/")

  }

 
  return (
    <div>
      <h3>Add Product</h3>
      <div>
        <div>
          <label>Product title</label>
          <input data-cy="add-product-title" type="text" name="title" onChange={handlechange} />
        </div>
        <div>
          <label>Product Category</label>
          <select data-cy="add-product-category" name="category" onChange={handlechange}>
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div>
          <label>Product Image</label>
          <input
            data-cy="add-product-image"
            type="url"
            placeholder="Image URL"
            name="imageSrc"
            onChange={handlechange}
          />
        </div>
        <div>
          <label>Product Price</label>
          <input data-cy="add-product-price" type="text" name="price" onChange={handlechange}/>
        </div>
        <div>
          <button data-cy="add-product-button" onClick={handleclick}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
