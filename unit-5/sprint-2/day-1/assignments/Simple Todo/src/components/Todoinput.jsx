import { useState } from "react"

export const Todoinput=({getdata})=>{
const [Text,setText]=useState("")

    return (<div>
         <input  onChange={(e)=>{
             
             setText(e.target.value)}} placeholder="Enter todo" /> 
        <button onClick={()=>{
            getdata(Text)
        }}>Add todo</button>

        
    </div>
    )
}