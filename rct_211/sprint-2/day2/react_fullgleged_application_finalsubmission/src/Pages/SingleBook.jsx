import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import {store} from "../Redux/store"
import { getBooks } from '../Redux/AppReducer/action'
import {Link} from "react-router-dom"

const SingleBook = () => {
  const {id}=useParams()
  const books=useSelector((store)=>store.AppReducer.books)
  const [currentbook,setCurrentbook]=useState()
  const dispatch=useDispatch()

  useEffect(()=>{
  if(books.length===0){
    dispatch(getBooks())
  }
  },[books.length,dispatch])

  useEffect(()=>{
   if(id){
    let temp=books.find((book)=>book.id===Number(id))
  
     temp && setCurrentbook(temp);
   }
  },[books,id])
 console.log(currentbook);
  return (
    <div>
      <h3>SingleBooks</h3>
      <div>{currentbook?.book_name}</div>
      <div>{currentbook?.category}</div>
      <div>{currentbook?.release_year}</div>
      <button>
        <Link to={`/books/${currentbook?.id}/edit`}>Edit</Link>
      </button>
      
    </div>
  )
}

export default SingleBook