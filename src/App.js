import React,{ useState }from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShilf from './Components/BookShilf'
import Search from './Components/Search'

function App () {
  const [show, setShow] = useState(false)


 
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
                <BookShilf title="Currently Reading"></BookShilf>
                <BookShilf title="Want to Read"></BookShilf>
                <BookShilf title="Read"></BookShilf>
                
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
