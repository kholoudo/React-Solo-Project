import Login from './Components/Login';
import Register from './Components/Register';
import Bakery from './Components/Bakery';
import Booking from './Components/Booking';
import NavBar from './Components/NavBar';
import Aboutus from './Components/Aboutus';
import LandingPage from './Components/LandingPage';
import Cart from './Components/Cart';
import {useState} from 'react';



import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';
import {useEffect} from 'react'

function App() {
  const [cartItems,setCartItems]=useState([]);
  const[logged,setLogged]=useState(JSON.parse(localStorage.getItem('logged_user')));
 
  return (

    
    <div className="App">
     
     
      <Router> 
      <NavBar logged={logged} setLogged={setLogged}/>
   <Routes>
  
   <Route exact path="/" exact element={<LandingPage/>}></Route>
<Route path="/Aboutus" element={<Aboutus/>}></Route>
<Route exact path="/Login" element={<Login logged={logged} setLogged={setLogged}/>}></Route>
<Route exact path="/Bakery" element={<Bakery/>}></Route>
<Route exact path="/Booking" element={<Booking/>}></Route>
<Route exact path="/Cart" element={<Cart  />}></Route>
<Route exact path="/Register" element={<Register/>}></Route>
</Routes>
<Footer/>
</Router>
    </div>
  );
}

  


export default App;
