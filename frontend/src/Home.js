import React, { Component } from 'react'
// import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FrontLogin from './FrontLogin'
//import FrontSignup from './FrontSignup'
//components
//import IndexNavbar from './components/Index_navbar'

export class Home extends Component {
  render() {
    return (
      <>
        {/*       
     <IndexNavbar /> */}
        <Routes>
          {/* <Route exact path="/" element={<FrontSignup />} /> */}
          <Route exact path="/login" element={<FrontLogin></FrontLogin>} />
        </Routes>
      </>
    )
  }
}

export default Home
