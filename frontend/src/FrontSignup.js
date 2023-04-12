import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import im1 from "./assets/images/im1.jpg";
import im23 from "./assets/images/im23.jpg";
import im33 from "./assets/images/im33.jpg";

//components
import IndexNavbar from './components/Index_navbar'; //navigation bar
import Signup from './components/Signup';


class App extends Component {
  render() {
    return (
    
      <React.Fragment>

        <IndexNavbar /> 

        <div className="row container-fluid">
          <div
            className="col-md-3 col-sm-7 mt-1"
            style = {{position: "relative", marginLeft: "5rem"}}
          >
            <div
              className="mt-2"
              style={{fontSize: "xx-large",color: "rgb(13, 13, 109)",fontFamily:"Droid Sans",fontWeight: "900",textShadow: "0.0625rem 0 #000000"}}
            >
              Hi, Welcome!
            </div>
            <br />

           <Signup />
          </div>

          <div class="carousel-okay col-6 container-fluid mt-5">
            <div
              id="myslideshow"
              className="carousel-okay  carousel slide "
              data-ride="carousel"
              data-interval="100"
            >
              <div className="carousel-okay carousel-inner">
                <div className="carousel-okay carousel-item active">
                  <img
                    src={im1}
                    className="w-100 "
                    style={{height: "100%",maxWidth: "100%"}}
                    alt=""
                  />
                </div>
                <div className="carousel-okay carousel-item">
                  <img
                    src={im23}
                    className="w-100 "
                    style={{height: "100%",maxWidth: "100%"}}
                    alt=""
                  />
                </div>
                <div className="carousel-okay carousel-item">
                  <img
                    src={im33}
                    className="w-100 "
                    style={{height: "100%",maxWidth: "100%"}}
                    alt=""
                  />
                </div>
              </div>
              <div style={{textAlign:"center", position:"relative", top: "-50px"}}>
                <br />
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
            </div>
          </div>
        </div>
        </React.Fragment>
      
    )
  }
}

export default App
