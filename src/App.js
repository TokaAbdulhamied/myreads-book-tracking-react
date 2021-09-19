import React,{ useState, useEffect }from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './Components/BookShelf'
import Search from './Components/Search'
import * as BooksApi from './BooksAPI'

function App () {
  const [show, setShow] = useState(false)
  const [books, setBooks] = useState([])
  let current  = books? books.filter(book => book.shelf === "currentlyReading"):[]
  let want = books? books.filter(book => book.shelf === "wantToRead"):[]
  let read = books? books.filter(book => book.shelf === "read"):[]

  
  useEffect(() => {
    BooksApi.getAll().then ((data)=> {
       setBooks(data)
       console.log (data)
    })

  }, [])


 
    return (
      <div className="app">
        {show ? (
          <Search></Search>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                
                
                <BookShelf title="Currently Reading" books={current}  ></BookShelf>
                <BookShelf title="Want to Read" books={want} ></BookShelf>
                <BookShelf title="Read" books={read} ></BookShelf>
                
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => setShow(true)}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }


export default App
