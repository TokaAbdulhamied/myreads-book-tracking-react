
import BookShelf from './BookShelf'
import React from 'react'
import {
  Link
} from "react-router-dom";
function Home({books, update}) {


  let current  = books? books.filter(book => book.shelf === "currentlyReading"):[]
  let want = books? books.filter(book => book.shelf === "wantToRead"):[]
  let read = books? books.filter(book => book.shelf === "read"):[]

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
