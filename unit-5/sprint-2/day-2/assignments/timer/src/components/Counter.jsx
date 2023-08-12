import { useEffect, useState } from "react";

export const Counter =() =>{
    const [count,setcount] = useState(10);
 
    useEffect(()=>{
      let id =  setInterval(()=>{           
            setcount((prevValue)=>{
                if(prevValue<=0){
                    clearInterval(id) ;
                    return 0;                
                }
                return prevValue-1;
            });
        },400)
        return function stop(){
            clearInterval(id)
        };
    },[])

//without useeffect setinterval runs infinite time
    return(
<div>
    <h3>Count: {count}</h3>
</div>
    )
}