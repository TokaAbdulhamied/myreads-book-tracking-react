import React, {useState} from 'react'
import Book from './Book'
import {
  Link
} from "react-router-dom";
import * as BooksApi from '../BooksAPI'

function Search({books, update}) {

  const [search, setsearch] = useState("")
   const [edited, setEdited] = useState([])
   const [notfound, setNotfound] = useState(false)

  const handleChange =(e)=>{
      setsearch(e.target.value)
      if (search === '' ) {
        setEdited ([]) ;
        setNotfound(true);
      }
      else {
      BooksApi.search (search).then ((results)=>{
        setNotfound (false)
         setEdited (results.map ((book)=>{

          book = {...book, shelf:"none"}
          books.filter ((saved)=>saved.id === book.id)
          .map (edit => book.shelf = edit.shelf)
          return book

        }))
      }).catch ((e)=>{
          setNotfound (true)
      })}

  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
        <button className="close-search" >Close</button>
        </Link>
        <div className="search-books-input-wrapper">

          <input type="text" placeholder="Search by title or author"
          value={search}
          onChange={handleChange}
          />

        </div>
      </div>
      <div className="search-books-results">
        {notfound ?
        "":
        
        <ol className="books-grid">
        { 
               edited.map ((i)=>(
              <li key={i.id}>
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
