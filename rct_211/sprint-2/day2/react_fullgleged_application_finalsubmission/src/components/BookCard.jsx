import React from 'react'

const BookCard = ({booksData}) => {
  return (
    <div>
        <img src={booksData.image} alt=""  style={{height:"60px"}}/>
        <div>{booksData.book_name}</div>
        <div>{booksData.category}</div>
        <div>{booksData.release_year}</div>
    </div>
  )
}

export default BookCard