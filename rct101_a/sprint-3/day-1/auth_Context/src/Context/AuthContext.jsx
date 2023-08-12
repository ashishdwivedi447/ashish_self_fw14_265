import React from "react";
import { useState } from "react";
import {createContext} from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const [isAuth,setIsAuth]=useState(false);
    const toggleAuth=()=>{
        setIsAuth(!isAuth)
    }
    return (
        <AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>
    )
}