import React from 'react'
import Book from './Book'
import '../App.css'
import { useState } from 'react'

function BookShelf({title:title, books:books, update:update}) {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        
            
            { 
              books.map ((book, index)=>(
              <li key={index}>
              <Book book={book} update={update}></Book>
              </li>
              ))
            }
            
          
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
