import React,{useEffect} from 'react'
import BookCard from './BookCard'
import styled from "styled-components"
import { getBooks } from '../Redux/AppReducer/action'
import { useDispatch,useSelector } from 'react-redux/es/exports'
import {store} from "../Redux/store"
import { useLocation, useSearchParams } from 'react-router-dom'
import {Link} from "react-router-dom"

const BookList = () => {

  const dispatch=useDispatch()
  const [searchParams]=useSearchParams()
  const location=useLocation()

    const books=useSelector((store)=>store.AppReducer.books)
    useEffect(()=>{
      if(books?.length===0 || location.search){
  const sortBy=searchParams.get("sortBy")

  const getBooksParams={
    params:{
        category:searchParams.getAll("category"),
        _sort: sortBy && "release_year",
        _order:sortBy,
    }
}

  dispatch(getBooks(getBooksParams));
}
    },[location.search])

    //console.log(books);
  return (
    
    <>
    {books?.length>0 && books.map((singleBook)=>(
       < BookCardWrapper>
        <Link to={`/books/${singleBook.id}`}><BookCard key={singleBook.id} booksData={singleBook}/></Link>
       </BookCardWrapper>
     
    ) )}
    </>
    
  )
}

export default BookList

const BookCardWrapper=styled.div`
border:1px solid blue;
padding:5px;
width:310px;


`