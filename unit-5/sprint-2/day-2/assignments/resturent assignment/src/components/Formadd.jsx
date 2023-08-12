import {  useState } from "react";
import "./Formadd.css";
import axios from "axios";

export const Formadd = () => {
  const [formData, setformData] = useState({
    name: "",
    food: "",
    prize: null,
    rating: null,
    votes: null,
    rivew: null,
    // payment_methods: {
      card: false,
      cash: false,
      upi: false,
    // },
  });

  const hndelchange = (e) => {
    let { id, value,type,checked } = e.target;
    value = type == "checkbox" ? checked : value;
    setformData({
      ...formData,
      [id]: value,
    });
  };

  const hndelsubmit = async(e)=>{
    console.log(formData,"b")
    e.preventDefault();
    await axios.post("http://localhost:8000/Restorent", formData).then(()=>{alert("Registered")})
    setformData(formData);
}

  return (
    <div className="form">
      <h1>Enter your Food</h1>
      <form onSubmit={hndelsubmit}>
        <input
          onChange={hndelchange}
          id="name"
          type="text"
          placeholder="Enter Restaurant Name"
        />
        <input
          onChange={hndelchange}
          id="image"
          type="text"
          placeholder="Enter image of food"
        />
        <input
          onChange={hndelchange}
          id="food"
          type="text"
          placeholder="Enter food items available"
        />
        <input
          onChange={hndelchange}
          id="prize"
          type="Number"
          placeholder="Enter minimum food prize"
        />
        <input
          onChange={hndelchange}
          id="rating"
          type="Number"
          placeholder="Enter rating"
        />
        <input
          onChange={hndelchange}
          id="votes"
          type="Number"
          placeholder="Enter votes"
        />
        <input
          onChange={hndelchange}
          id="rivew"
          type="Number"
          placeholder="Enter rivew"          
        />
        <div></div>
        
        <div className="payment">
          Card
          <input
            type="checkbox"
            onChange={hndelchange}
            // checked={formData}
            className="checkbox"
            id="card"           
          />
          Cash
          <input
            type="checkbox"
            onChange={hndelchange}
            className="checkbox"
            id="cash"
            //checked={formData}
          />
          All
          <input
            type="checkbox"
           //checked={formData.payment_methods}
            onChange={hndelchange}
            className="checkbox"
            id="upi"
          />
        </div>
        <input id="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};
