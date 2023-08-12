import React, { createContext, useState } from "react";

export const CartContext=createContext();

export const CartProvider=({children})=>{


    const [cart,setCart]=useState([])

    const addtocart=(e)=>{
        setCart([
            ...cart,
            e
            
        ]);
    
        
    }
    
//    const payload=cart
//     fetch("http://localhost:8080/cart",{
//     method:"POST",
   
//     body:JSON.stringify(payload),
//     headers:{
//         "Content-Type":"applicaton/json"
//     },
//     })
//     .then((r)=>r.json)
//     .then(()=>{
//         console.log(payload);
//     })

    
    
    return (
        <CartContext.Provider value={{addtocart,cart}}>{children}</CartContext.Provider>
    )
}