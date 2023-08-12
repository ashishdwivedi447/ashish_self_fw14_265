import { useEffect, useState } from "react";
import "./Form.css"
export const Form =() =>{

   const [formData, setformData] = useState({
    name: "",
    food : "",
    prize :null,
    rating :null,
    votes : null,
    rivew :null,
    payment_methods: {
      card: false,
      cash:false,
      upi: false
    }
   });

   const hndelchange = (e)=>{
    const {id, value} = e.target;

    setformData({
        ...formData,
        [id]:value
    })
}

// const checkornot =(id,status) =>{ 
//     formData.map((e) =>{
//         if(e.id === id){
//         e.status = !e.status
//         }
//     })
// }


const hndelsubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/Restorent",{
        method : "POST",
        headers :{
            "content-type":"application/json"
        },
        body :JSON.stringify(formData)
    })
}

function checking(id){

}

    return(
<div>
<h1>Enter your Food</h1>
<form onSubmit={hndelsubmit}>
    <input onChange={hndelchange} id="name" type="text" placeholder="Enter Restaurant Name"/>
    <input onChange={hndelchange} id="image" type="text" placeholder="Enter image of food"/>
    <input onChange={hndelchange} id="food" type="text" placeholder="Enter food items available"/>
    <input onChange={hndelchange} id="prize" type="Number" placeholder="Enter minimum food prize"/>
    <input onChange={hndelchange} id="rating" type="Number" placeholder="Enter rating"/>
    <input onChange={hndelchange} id="votes" type="Number" placeholder="Enter votes"/>
    <input onChange={hndelchange} id="rivew" type="Number" placeholder="Enter rivew"/>
    {/* <div> */}
    {/* </div>
    <p>Card</p>
    <input type="checkbox" onChange={() => {
        checkornot("card","card")}  }
        className="checkbox" id="card"/> 
    <p>Cash</p>
    <input type="checkbox" onChange={checkornot("card","cash")}  className="checkbox" id="cash"/> 
    <p>Upi</p>
    <input type="checkbox" onChange={checkornot("Upi","upi")} className="checkbox" id="Upi"/>     */}
<input id="submit" type="submit" value="Submit" />
</form>
</div>
    )
}