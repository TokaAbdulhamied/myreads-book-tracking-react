
import BookShelf from './BookShelf'
import React,{ useState, useEffect }from 'react'
import * as BooksApi from '../BooksAPI'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Home({books:books, update:update}) {


  let current  = books? books.filter(book => book.shelf === "currentlyReading"):[]
  let want = books? books.filter(book => book.shelf === "wantToRead"):[]
  let read = books? books.filter(book => book.shelf === "read"):[]
  console.log (current, "c", want, "w", read, "r")

  return (
    <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf title="Currently Reading"  books={current} update={update}  ></BookShelf>
                  <BookShelf title="Want to Read"  books={want}  update={update} ></BookShelf>
                  <BookShelf title="Read"  books={read}  update={update} ></BookShelf>
                  
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">
                <button>Add a book</button>
                </Link>
              </div>
            </div>
  )
}

export default Home
