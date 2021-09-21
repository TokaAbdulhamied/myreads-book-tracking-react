import React, {useState} from 'react'
import Book from './Book'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as BooksApi from '../BooksAPI'

function Search({books:books, update:update}) {

  const [search, setsearch] = useState("")
   const [edited, setEdited] = useState([])
   const [notfound, setNotfound] = useState(false)

  const handleChange =(e)=>{
      setsearch(e.target.value)
  }
  const handleKeyPress= (e) =>{
    if (e.key === 'Enter' && search !== ""){

      BooksApi.search (search).then ((results)=>{
        setNotfound (false)
         setEdited (results.map ((book)=>{

          book = {...book, shelf:"none"}
          books.filter ((saved)=>saved.id === book.id).
          map (edit => book.shelf = edit.shelf)
          return book

        }))

          console.log (edited)
      }).catch ((e)=>{
          setNotfound (true)
      })
      
    }
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
        <button className="close-search" >Close</button>
        </Link>
        <div className="search-books-input-wrapper">

          <input type="text" placeholder="Search by title or author"
          
          onKeyPress={handleKeyPress}
          value={search}
          onChange={handleChange}
          />

        </div>
      </div>
      <div className="search-books-results">
        {notfound ?
        <h1>No Results Found </h1>:
        
        <ol className="books-grid">
        { 
               edited.map ((i, index)=>(
              <li key={index}>
              <Book book={i} update={update}></Book>
              </li>
              ))
            }
        </ol>
}
      </div>
    </div>
  )
}

export default Search
