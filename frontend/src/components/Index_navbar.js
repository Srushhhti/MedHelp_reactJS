import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import Emblem from '../assets/images/Emblem_of_India.svg'
import Line1 from '../assets/images/Line 1.png'

function Index_navbar() {

  return (
       <>
      <nav className="navbar navbar-expand-md" style={{ backgroundColor: '#F2F6FF' }}>
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand "
            style={{ fontSize: '2.75rem', fontFamily: 'Inter' }}
          >
            <img
              alt="#"
              src={Emblem}
              className="mt-2 ms-4 me-1"
              style={{ width: '2rem', height: '3.245625 rem', float: 'left' }}
            />
            <img
              alt="#"
              src={Line1}
              className="mt-2 ms-1 me-1"
              style={{ width: '0.02rem', height: '3.0625rem', float: 'left' }}
            />

            <span
              className="mt-1 ms-1 me-1"
              style={{ color: '#18CDCA', float: 'left', fontWeight: '600' }}
            >
              Med
            </span>
            <span
              className="mt-1  "
              style={{ color: '#4F4F4F', float: 'left', fontWeight: '600' }}
            >
              Repo
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Navbar"
          >
            <span className="fa fa-list"></span>
          </button>
          <div className="collapse navbar-collapse" id="Navbar">
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              style={{
                fontSize: 'larger',
                fontWeight: '400',
                fontFamily: 'Inter',
                lineHeight: '1.895625 rem',
              }}
            >
              <li className="nav-item">
                <Link
                  to="/Bitch"
                  className="p-3 nav-link"
                  href="/"
                  style={{ color: '#0B5B5A' }}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/"
                  className="p-3 nav-link"
                  href="/"
                  style={{ color: '#0B5B5A' }}
                >
                  Help
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="p-3 nav-link"
                  href="/"
                  style={{ color: '#0B5B5A' }}
                >
                  Know More
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/Home/login"
                  className="p-3 nav-link"
                  href="/"
                  style={{ color: '#0B5B5A' }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  
  )
}

export default Index_navbar
