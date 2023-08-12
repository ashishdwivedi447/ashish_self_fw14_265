import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";
import { getWatch } from "../Redux/AppReducer/action";
import WatchCard from "../Components/WatchCard"
import { useLocation, useSearchParams } from "react-router-dom";

const Watches = () => {

  const watches=useSelector((store)=>store.AppReducer.watches)
  const dispatch=useDispatch();

  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    if (location || watches.length === 0) {
    
      var queryParams = {
        params: {
         category: searchParams.getAll("category"),
        
        },
      };
    }
    dispatch(getWatch(queryParams))
  },[location.search])

  console.log(watches);
  return (
    <div>
      <Filter />
      <div>
        {watches?.length>0 && watches.map((item)=>(
          <WatchCard watchdata={item}/>
        ))}
      </div>
    </div>
  );
};

export default Watches;
