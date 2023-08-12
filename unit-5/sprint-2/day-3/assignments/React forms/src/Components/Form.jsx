import {useState,useEffect} from "react"
 import {Table} from "./Table"
function Form(){
    const[res,setRes]=useState([])
   const[formdata,setFormdata]=useState(
    {
        name:"",
        age:0,
        address:"",
        department:"", 
        salary:0,
        Martial:false,
    }
)
useEffect(()=>{
   details();
},[])

const details= async ()=>{
    let res=await fetch("http://localhost:8080/employee");
    let data=await res.json();
    setRes(data)
}




   function handledata(e){
       setFormdata({...formdata,
           [e.target.id]:e.target.value
       })
   }
   function getdata(e){
       e.preventDefault();
       fetch("http://localhost:8080/employee",{
           method:"POST",
           headers:{
               "content-type":"application/json"
           },
           body:JSON.stringify(formdata)
       }).then(()=>{details()})
   }
    return (
        <div>
            <input type="text"  id="name"  placeholder="Enter your name" onChange={handledata}/><br></br>
            <input type="number"  id="age" placeholder="Enter your age"  onChange={handledata}/><br></br>
            <input type="text"  id="address"  placeholder="Enter your Address" onChange={handledata}/><br></br>
            <input type="text"  id="department"  placeholder="Enter your Department" onChange={handledata}/><br></br>
            <input type="number"  id="salary"  placeholder="Enter your salary" onChange={handledata}/><br></br>
            <input type="checkbox" name="married" value="married" id="Martial"onChange={(e)=>{
                setFormdata({...formdata,Martial:e.target.checked})
            }} /><span>Married</span><br></br><br></br>
            <button  onClick={getdata}>Submit</button>
        <table>
            <thead>
                <tr>
                   <th>Name</th>
                   <th>age</th>
                   <th>Address</th>
                   <th>department</th>
                   <th>salary</th>
                   <th>Martial</th>
                 </tr>
            </thead>
            <tbody>
            {res.map((e)=>{
               return <Table value={e}/>
            })}
            </tbody>
        </table>
        </div>
    )
}
export {Form}