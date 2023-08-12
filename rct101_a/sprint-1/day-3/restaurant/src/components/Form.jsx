import React, { useState } from 'react'
import "./Form.css"

const Form = () => {
  const [form,setForm]=useState({});

  const onChange=(e)=>{
    const {type,name,value}=e.target;
    console.log(name,value);
    if(type==="checkbox"){
      setForm({
        ...form,
        [name]:checked
       })
    }
    else{
      setForm({
        ...form,
        [name]:value
       })
    }

    
     

  }
const handleOnSubmit=(e)=>{
  e.preventDefault();
  fetch("http://localhost:8080/data",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(form)
  }

  )
  .then((r)=>r.json())
  .then((data)=>{

  })
}
  
  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <div>
        <input name="imageurl" type="text"  placeholder='Imageurl' onChange={onChange}/>
      </div>
      <div>
        <input name="restaurantname" type="text" placeholder='RestaurantName' onChange={onChange}/>
      </div>
      <div>
        <input name="dishname" type="text" placeholder='DishName' onChange={onChange} />
      </div>
      <div>
        <input name="cost" type="number" placeholder='Cost'  onChange={onChange}/>
      </div>
      <div>
        <input  name="rating" type="number" placeholder='Rating' onChange={onChange} />
      </div>
      <div>
        <input name="votes" type="number"  placeholder='Votes' onChange={onChange}/>
      </div>
      <div>
        <input name="reviews" type="Number" placeholder='Reviews' onChange={onChange} />
      </div>
      <div>
        <input name="ordermode" type="text" placeholder='Ordermode' onChange={onChange}/>
      </div>
      <div>
      <label htmlFor="">card</label>
        <input name="card" type="checkbox"   onChange={onChange}/>
       
      </div>
      <button type="submit" >Submit</button>
    
    </form>
  )
}

export default Form