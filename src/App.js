import React,{ useState, useEffect }from 'react'
// import * as BooksAPI from './BooksAPI'
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
  const [show, setShow] = useState(false)



 
    return (
      <Router>
      <div className="app">
      <Route path="/search" >
            <Search></Search>
          </Route>
          <Route exact path="/" >
            <Home></Home>
          </Route>

      </div>
</Router>
    )
  }


export default App
