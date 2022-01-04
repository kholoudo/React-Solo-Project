import '../styles/NavBar.css';

import React, { useState, Fragment } from 'react'

import {Link} from 'react-router-dom' 



function NavBar(props){
   
   
        return(
<Fragment>

<div className="navBar" >
<img src="./BAN2.png" className="App-logo" alt="logo" ></img>
<ul className="navList" >

         
<li className="item"><Link to="/">Home</Link></li>
<li className="item"><Link to="/Aboutus">About us</Link></li>
<li className="item"><Link to="/Bakery">Bakery </Link></li>
<li className="item"><Link to="/Cart"><i className='fas fa-shopping-cart' ></i></Link></li>


        
<li>
            {!props.logged && (
              <Link to="/login">
                <button  className="item1">Login</button>
              </Link>
            )}
          </li>
          <li>
            {props.logged &&(
              <Link to="/Login">
                <button
                  className="item1"
                  onClick={() => {
                    localStorage.removeItem("logged_user");
                    props.setLogged(false);
                    
                  }}
                >
                  Logout
                </button>
              </Link>
            )}
          </li>
          <li>
            {!props.logged && (
              <Link to="/Register">
                {" "}
                <button className="item1">Register</button>
              </Link>
            )}
          </li>
          {/* {localStorage.getItem("users") ? (
          <div className="logout" onClick={() => {
            localStorage.removeItem("users");}}>Logout
            
          </div>
        ) : (
          <>
            <Link to="/Register">
              <div className="item"> Register </div>
            </Link>
            <Link to="/Login">
              <div className="item"> Log In </div>
            </Link>
          </>
        )} */}


{/* <li className="item"> <Link to="/Login">Login</Link> </li>
<li className="item"><Link to="/Register">Register</Link></li> */}



</ul>

</div>
 </Fragment>)
        
}export default NavBar