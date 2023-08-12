import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from '../Redux/action'
import styles from "./Card.module.css"
import {SiGooglechat} from "react-icons/si"

const Card = () => {

const data=useSelector((store)=>store.data);
const dispatch=useDispatch()
const [page,setPage]=useState(1);
const [sort,setSort]=useState("")

    useEffect(()=>{
dispatch(getdata(page))
},[page])

const handlesort=(e)=>{
setSort(e.target.value)
if(sort=="htl"){
    data.sort((a,b)=>b.created_at-a.created_at);
}
else{
    data.sort((a,b)=>a.created_at-b.created_at);
}
}

console.log(data);

  return (
    <div>

        <div className={styles.sort_buttton}>
            <div className={styles.sort}>
            <div> Sort By created_at</div>
            <div>
                <select name="" id="" onChange={handlesort}>
                    <option value="htl" >Latest to old</option>
                    <option value="lth">old to Latest</option>
                </select>
            </div>
            </div>
            <div>
                <button className={styles.top10button}>TOP 10 COMMENTS</button>
            </div>
           
        </div>

        <div className={styles.gridcontainer}>
            {
            data.map((item)=>(
                <div className={styles.card}>
                     <div className={styles.created}>Created at:{item.created_at}</div>
                    <div className={styles.imageauthor}>
                        <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg" alt="" />
                        <div>{item.author}</div>
                       
                        
                    </div>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.chaticonandnum}>
                        <div className={styles.iconcomments}>
                        <div>
                        <SiGooglechat/>
                        </div>
                        <div>{item.num_comments}</div>
                        </div>
                        <div onClick={()=>window.open(item.url)}>Go to Article</div>
                       
                    </div>
                </div>
            ))
}
        </div>
       <div className={styles.buttondiv}>
        <button onClick={()=>setPage(1)}>1</button>
        <button onClick={()=>setPage(2)}>2</button>
        <button onClick={()=>setPage(3)}>3</button>
        <button onClick={()=>setPage(4)}>4</button>
        <button onClick={()=>setPage(5)}>5</button>
       </div>
    </div>
  )
}

export default Card