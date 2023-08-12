import React, { useEffect, useState } from 'react'

const RestaurantDetails = () => {
    const [data,setData]=useState([]);

    const getData=()=>{
        fetch("http://localhost:8080/data")
        .then((r)=>r.json())
        .then((data)=>setData(data));
    }
    useEffect(()=>{
        getData();
    },[])

    const onestarfilter=()=>{
       var tempone= data.filter((e)=>{
            return e.rating >1
        })
        setData(tempone)
    }
    const twostarfilter=()=>{
       var temptwo= data.filter((e)=>{
            return e.rating >2
        })
        setData(temptwo)
    }
    
    const threestarfilter=()=>{
        var tempthree= data.filter((e)=>{
             return e.rating >3
         })
         setData(tempthree)
     }
    const fourstarfilter=()=>{
       var temp= data.filter((e)=>{
            return e.rating >4
        }
       
        )
        console.log(temp);
        setData(temp)
    }

    const handleSelect=(e)=>{
     if(e.target.value==="low"){
        let ans= data.sort((a,b)=> b.Number(e.cost)-a.Number(e.cost))
        setData(ans)
        console.log(ans);
     }
     
    }
  return (
    <div>
        <div className='topportion'>
    <span>Sort By</span>
        <select name="" id="" onChange={handleSelect}>
            <option value=""></option>
            <option value="high">Low to High</option>
            <option value="low">High to low</option>
        </select>
        <button className='btn' onClick={onestarfilter}>1 star</button>
        <button className='btn' onClick={twostarfilter}>2 star</button>
        <button className='btn' onClick={threestarfilter}>3 star</button>
        <button className='btn' onClick={fourstarfilter}>4 star</button>
        <button className='btn'>Cash only</button>
        <button className='btn'>Card only</button>
        </div>
        {data.map((e)=>(
            
            <div className='card'>
                <div  className='contentbox'>
       <div><img className='image' src={e.imageurl} alt="" /></div>
       <div>
        
            <div className='restu'>{e.restaurantname}</div>
            <div>{e.dishname}</div>
            <div>{e.cost}</div>
            <div>{e.card ? 'Card Accepted' : "Card not Accepted"}</div>
        </div>
        <div>
            <div className='rating'>{e.rating}</div>
            <div>{e.votes}<span>votes</span></div>
            <div>{e.reviews}<span>reviews</span></div>
            <div className='ordermode'>{e.ordermode}</div>
        </div>
       </div>
            </div>
        ))}
    </div>
  )
}

export default RestaurantDetails