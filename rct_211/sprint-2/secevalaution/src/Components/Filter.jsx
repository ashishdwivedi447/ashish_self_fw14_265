
import React, {useEffect,useState} from "react";
import {useSearchParams} from "react-router-dom"
import { useDispatch } from 'react-redux/es/hooks/useDispatch'

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const [searchParams,setSearchParams]=useSearchParams()
  const urlCategory=searchParams.getAll("category")
  const dispatch=useDispatch()
  const [category,setCategory]=useState(urlCategory|| [])

  
  const handleCheckbox=(e)=>{
    const option=e.target.value
 
    
     let newCategory=[...category]
     if(category.includes(option)){
         
         newCategory.splice(newCategory.indexOf(option),1)
     }
     else{
         newCategory.push(option);
     }
 
     setCategory(newCategory)
     }
 
     useEffect(()=>{
      if(category){
          let params={}
  
          category && (params.category=category)   //if category present then do this 
                //if sort by present then do this
          setSearchParams(params)
         
      }
      },[category,setSearchParams,dispatch,])
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox" value="Sneakers" checked={category.includes("Sneakers")} onChange={handleCheckbox}/>
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers"  checked={category.includes("Loafers")} onChange={handleCheckbox} />
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas"  checked={category.includes("Canvas")} onChange={handleCheckbox} />
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots" checked={category.includes("Boots")} onChange={handleCheckbox}/>
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
