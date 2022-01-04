import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login({ setLogged, setSubmitted }) {
  const navigate = useNavigate();

  const [formGroup, setFormGroup] = useState({
    email: "",
    password: "",
  });

  const Change = (e) => {
    const { name, value } = e.target;
    setFormGroup({ ...formGroup, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    let index;
    let flag = true;
    let Userss = [];
    Userss = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < Userss.length; i++) {
      if (
        formGroup.email === Userss[i].email &&
        formGroup.password === Userss[i].password
      ) {
        index = i;
        localStorage.setItem("logged_user", JSON.stringify(Userss[index]));
        setLogged(localStorage.getItem("logged_user"));
        // setSubmitted(localStorage.getItem("logged_user"));
        console.log('kholoud');
        navigate('/');

        return (flag = false);
      }else{
        alert('wrong')
      }
    }
    if (flag === true) {
      alert("your Password Or Email is not correct ");
    }
  };

  return (
    <div className="logIn">
     
            <h3>LogIn</h3>
            <form onSubmit={onSubmit} className="log-form">
              <div className="input-group-form-group">
                
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={Change}
                />
              </div>

              <div className="input-group-form-group">
                
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  name="password"
                  onChange={Change}
                />
              </div>
              <div className="reg">
                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
                    className="login-btn"
                    
                  />
                </div>
                <div className="card-footer2">
                  
                    Don't have an account?
                    <Link to="/Register">Register</Link>
                 
                </div>
              </div>
            </form>
          </div>
       
     
  );
}

export default Login;