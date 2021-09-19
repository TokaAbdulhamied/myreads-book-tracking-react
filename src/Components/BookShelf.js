import React from 'react'
import Book from './Book'
import '../App.css'
import { useState } from 'react'

function BookShelf({title:title, books:books}) {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            
            { 
              books.map ((book)=>(
              <Book book={book}></Book>
              )
              )
            }
            
          </li>
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
