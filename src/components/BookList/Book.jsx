import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = (book) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Title: </span>
          <span>{book.title}</span>
        </div>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author}</span>
        </div>

      </div>
    </div>
  )
}

export default Book