import React, {useEffect, useState} from 'react'

import eyelash from "../assets/images/eyelash.png";
//import eye from "../assets/images/eye.png";



function Signup() {
    const [pass,valid_pass]=useState({password:"",confirm:"",Match:""});
    const [cred_pass,valid_cred_pass]=useState(true);
    useEffect(()=>{
        const regex=new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
        if(!regex.test(pass.password)){
                valid_cred_pass(false);
                console.log(cred_pass)
                }
        
},[pass,cred_pass])


    return (<>
     <form action="/check_login" method="get">
              <div
                className="mb-3"
                style={{fontFamily: "Droid Sans",color: "rgb(13, 13, 109)",fontWeight:"600"}}
              >
                <label for="Name" className="form-label">
                  Mail ID
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="Email"
                  aria-describedby="name"
                  placeholder="yourname@example.com"
                  name="email"
                />
              </div>

              <div
                className="mb-3"
                style={{fontFamily: 'Droid Sans', color: "rgb(13, 13, 109)",fontWeight:"600"}}
              >
                <label for="password" className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="id_password"
                    onChange={(e)=>{
                        let password=e.target.value;
                        console.log(password);
                        valid_pass((pass)=>{
                            let Match="";
                        if(password!==pass.confirm){Match="The passwords dont match";}
                        else Match=""
                    return {...pass,password:password,Match:Match}})
                        }}
                />

                <img alt='#'
                  src={eyelash}
                  style={{top: "-2rem",width:"5%",position: "relative",left:"18rem",cursor: "pointer"}}
                  id="toggler"
                />

                <div
                  style={{color:"red",fontSize:"12px",display: 'none',position: "relative",top:"-1rem"}}
                  id="pass_creds"
                >
                  8-12 letters & at least one special,number,capital and
                  lowercase alphabet
                </div>
              </div>

              

              <br />
              <button
                disabled
                class="btn container-fluid"
                style={{backgroundColor: "#00A09A",color: "white",height:"3rem"}}
                id="Signup"
              >
                <i
                  className="fa fa-arrow"
                  style={{color: "white", marginRight: "0.2rem"}}
                ></i>{' '}
                Login
              </button>
              
            </form>
    
    </>
    )
  }

export default Signup