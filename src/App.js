import React,{ useState, useEffect }from 'react'
import * as BooksApi from './BooksAPI'
import './App.css'

import Search from './Components/Search'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home'

function App () {
  const [books, setBooks] = useState([])

  
  useEffect(() => {
    BooksApi.getAll().then ((data)=> {
       setBooks(data)
       console.log (data)
    })

  }, [])

  const update = (shelf, book) =>{

    BooksApi.update(book, shelf).then(()=>{
      book.shelf = shelf 
      let updatedBooks = books.filter ((select)=> select.id !== book.id ).concat(book)
      setBooks (updatedBooks)
    })

  }



 
    return (
      <Router>
      <div className="app">
      <Route path="/search" >
            <Search books={books} update={update}></Search>
          </Route>
          <Route exact path="/" >
            <Home books={books} update={update}></Home>
          </Route>

      </div>
</Router>
    )
  }


export default App
