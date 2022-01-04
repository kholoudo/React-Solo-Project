import React, { Component } from "react";
import {Link} from 'react-router-dom'
import '../styles/Intro.css'


function Intro (){



    return(
       
    <div className="IntroSection">
    
<div className="introElements">
<p>You can try our delicious, made with love , different types of fluffy doughnuts!<br></br>Enjoy many discounts in special occasions</p>


<Link to='/Bakery'><button className="homeBtn">Order Now</button></Link>


</div>
</div>

    )

}


export default Intro;