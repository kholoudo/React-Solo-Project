import React from 'react';
import {useState} from 'react';
import { Navigate } from 'react-router-dom';
import "../styles/Booking.css"

function Booking() {
    let obj = { fName: "", lName: "", Email: "" };

    let logged = JSON.parse(localStorage.getItem("logged_user"))
      ? JSON.parse(localStorage.getItem("logged_user"))
      : obj;
      if (!localStorage.getItem("orders"))
      localStorage.setItem("orders", JSON.stringify([]));
   
    const [formInfo, setFormInfo] = useState(logged);
    const handleChange = (e, attr) => {
      setFormInfo({ ...formInfo, [attr]: e.target.value });
    };
  
    // //********** Handle Date ********/
    // let today = new Date();
    // const start = today.toISOString();
    // const valueCut1 = start.substring(0, 10);
    // let [thisDay, setThisDay] = useState(valueCut1);
  
    // const handleDateChange = (e) => {
    //   setThisDay(e.target.value);
    // };
    // const handleDelivery=(e)=>{
    //     e.preventDefault();
    //     alert("Thank you, Delivery team will contact you soon");
       
    // }
  
    const checkOrders = (e) => {
      e.preventDefault();
  
      let userInfo = {
        fName: formInfo.fName,
        lName: formInfo.lName,
        Phone: formInfo.Phone,
        Date: formInfo.Date,
        hours:formInfo.hours,
       
      };
  
  
      if (localStorage.getItem("orders")) {
        if (formInfo.fName.length > 4 && formInfo.lName.length > 4) {
          let orders= JSON.parse(localStorage.getItem("orders"));
          orders.push(userInfo);
          localStorage.setItem("orders", JSON.stringify(orders));
         
        } else {
          alert("wrong");
        }
      } else {
        const orders = [];
        orders.push(userInfo);
        alert(" Thank you, Delivery team will contact you soon");
        Navigate('/');
      }
    };
  
    return (
      
        
         <div className='order-submission'>
             <h3>Please fill the delivery Details</h3>
            <form className='order-form' onSubmit={checkOrders}>
              <input
                value={formInfo.fName}
                onChange={(e) => {
                  handleChange(e, "fName");
                }}
                name="fName"
                className="contactInput"
                type={"text"}
                id="firstName"
                placeholder="  First Name"
                required
              ></input>
              {formInfo.fName.length <= 4 && formInfo.fName.length > 0 ? (
                <small className="errorMessage1">
                  User name must be more than 4
                </small>
              ) : (
                ""
              )}
  
              <input
                name="lName"
                value={formInfo.lName}
                onChange={(e) => {
                  handleChange(e, "lName");
                }}
                className="contactInput"
                type={"text"}
                id="lastName"
                placeholder="  Last Name"
                required
              ></input>
              {formInfo.lName.length <= 4 && formInfo.lName.length > 0 ? (
                <small className="errorMessage1">
                  User name must be more than 4
                </small>
              ) : (
                ""
              )}
  
              <input
                name="Phone"
                value={formInfo.Phone}
                onChange={handleChange}
                className="contactInput"
                type={"telephone"}
                id="Phone"
                placeholder="Enter your mobile number"
                required
              />
  
              <input
                name="Date"
                onChange={(e) => handleChange(e)}
                value={formInfo.Date}
                className="contactInput"
                type={"date"}
                // min={valueCut1}
                // value={thisDay}
                id="Date"
                placeholder="Date"
                required
              />
               <input required type="time" name="hours" className='contactInput' />
              <button className="orderSubmit" >Submit</button>
            </form>
         
            </div>
       
    );
  }
  
  


export default Booking
