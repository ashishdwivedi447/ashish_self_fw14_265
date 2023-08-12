import React, { Children } from 'react'
import { JsxAttribute } from 'typescript';

interface IHeaderPropes{
    label?:string; 
    children?:JSX.Element       // ? optional chaining
}

const Header = ({label,children }:IHeaderPropes) => {
    
  return (
    <>
        <h3>{label}</h3>
        {children}
    </>
  )
}

export default Header