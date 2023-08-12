import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams,useLocation } from "react-router-dom";
import Filter from "../Components/Filter";
import { getShoes } from "../Redux/AppReducer/action";
import {store} from "../Redux/store"
import ShoeCard from "../Components/ShoeCard"
import {Link} from "react-router-dom"

const Shoes = () => {
const dispatch=useDispatch();
const [searchParams]=useSearchParams()
const location=useLocation()
const shoes=useSelector((store)=>store.AppReducer.shoes)
  useEffect(()=>{
    if(shoes?.length===0 || location.search){

      const getShoesParams={
        params:{
            category:searchParams.getAll("category"),
            
            
        }
    }
      dispatch(getShoes(getShoesParams));
    }
    
  },[location.search])

  console.log(shoes);
  return (
    <div>
      <Filter />
      <div>
        {shoes?.length>0 && shoes.map((item)=>(
          <Link to={`/shoes/${item.id}`}><ShoeCard  shoeData={item}/></Link>
         
        ))}
      </div>
    </div>
  );
};

export default Shoes;
