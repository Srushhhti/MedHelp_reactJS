import React, {} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

//components
// import IndexNavbar from './components/Index_navbar'
import Home from './Home'
import User from './User'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <main>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Bitch" element={<User />} />
      </Routes>
      </main>

     </Router>
  </React.StrictMode>,
)

reportWebVitals()
