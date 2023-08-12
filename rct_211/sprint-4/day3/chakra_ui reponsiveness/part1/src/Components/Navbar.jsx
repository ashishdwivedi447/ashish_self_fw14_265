import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <div style={{border:"1px solid teal", heigth:"40px" ,display:"flex", gap:"40px" ,alignItems:"center",justifyContent:"center",backgroundColor:'pink',color:"white"}}>
           <Link to="/"><div>Partone</div></Link> 
            <Link to="parttwo"><div>Parttwo</div></Link>
        </div>
    </div>
  )
}

export default Navbar