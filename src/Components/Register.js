import React, { useState, useEffect } from "react";
import "../styles/Register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register({ setSubmitted, setLogged }) {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

 

  const [formGroup, setFormGrroup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const register = (e) => {
    const { name, value } = e.target;
    setFormGrroup({ ...formGroup, [name]: value });
  };

  let isValidate;
  const validate = (e, values) => {
    e.preventDefault();

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (values.firstName.length <= 2) {
      errors.firstName = "First Name is too short!";
    }
    if (values.lastName.length <= 2) {
      errors.lastName = "Last Name is too short!";
    }
    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (values.password.length <= 8) {
      errors.password = "Password must be more than 8 characters";
    }
    if (values.confPassword !== values.password) {
      errors.confPassword = "Password is not match";
    }
    setFormErrors(errors);
    if (
      values.firstName.length > 2 &&
      values.lastName.length > 2 &&
      regex.test(values.email) &&
      values.password.length > 8 &&
      values.confPassword === values.password
    ) {
      console.log("test");
      isValidate = true;
      reg(e, errors);
    }
  };

  const reg = (e, errors) => {
    e.preventDefault();
    console.log(errors);
    let users = {
      fName: formGroup.firstName,
      lName: formGroup.lastName,
      password: formGroup.password,
      email: formGroup.email,
    };
    let arr = [];

    console.log(users);
    let flag = true;
    if (localStorage.getItem("users")) {
      arr = JSON.parse(localStorage.getItem("users"));
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].email === formGroup.email) {
          alert("account is exist please go To login Page");
          navigate("/Login");

          return (flag = false);
        }
      }
      if (flag === true && isValidate === true) {
        arr.push(users);
        localStorage.setItem("users", JSON.stringify(arr));
        navigate("/Login");
      }
    } else if (isValidate === true) {
      arr.push(users);

      localStorage.setItem("users", JSON.stringify(arr));
      navigate("/Login");
    }
  };
  return (
    <div className="Register" id="Register">
      
              <h3>Join Us </h3>

              <form onSubmit={(e) => validate(e, formGroup)} id="form">
                <div className="register-body">
                <div className="input-group">
                 
                  <input
                    id="firstName"
                    type="text"
                    className="form-control1"
                    placeholder="First Name"
                    name="firstName"
                    value={formGroup.firstName}
                    onChange={register}
                  />
                </div>{" "}
                <small className="errorMsg">{formErrors.firstName}</small>
                <div className="input-group">
                
                 
                  
                  <input
                    id="lastName"
                    type="text"
                    className="form-control1"
                    placeholder="Last Name"
                    name="lastName"
                    value={formGroup.lastName}
                    onChange={register}
                    required
                  /></div>
               
                <small className="errorMsg">{formErrors.lastName}</small>
                <div className="input-group">
                  <input
                    id="userEmail"
                    type="email"
                    required
                    className="form-control1"
                    placeholder="Email"
                    value={formGroup.email}
                    name="email"
                    onChange={register}/></div>
               
                <small className="errorMsg">{formErrors.email}</small>
                <div className="input-group">
                  <input
                    id="userPassword"
                    type="password"
                    className="form-control1"
                    placeholder="password"
                    name="password"
                    value={formGroup.password}
                    onChange={register}
                    required
                  /></div>
                <small className="errorMsg">{formErrors.password}</small>
                <div className="input-group">
                  <input
                    id="userRePassword"
                    type="password"
                    className="form-control1"
                    placeholder="Repet Password"
                    name="confPassword"
                    value={formGroup.confPassword}
                    onChange={register}
                    required
                  /></div>
                <small className="errorMsg">{formErrors.confPassword}</small>
                <div className="reg">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="RegBtn"
                    /></div>
                  
                  <div className="card-footer" id="card-footer">
                    
                      Already have an account?<Link to="/Login">Login</Link>
                    </div>
                    </div>
                </div>
  </form> </div>
  );
}

export default Register;