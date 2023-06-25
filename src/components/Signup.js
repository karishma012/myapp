import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpassword:"" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        //it prevents page from reloading
        const {name , email, password } = credentials;
        //api call
        const response = await fetch("http://localhost:3500/api/auth/createuser", {
            
            method: 'POST',
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({ name , email, password }),
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            navigate("/");
        }
        else {
            alert("Invalid credentials");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
  return (
    <div className='container'>
     <form onSubmit={handleSubmit}>
     <div className="form-group mb-3">
    <label htmlFor="name">Name</label>
    <input type="name" className="form-control" id="name" name="name" onChange={onChange} placeholder="Enter Your Name"/>
  </div>
  <div className="form-group  mb-3">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="Password" name="password" onChange={onChange}  placeholder="Password" minLength={5} required/>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="cpassword" className="form-control" id="cpassword" name="cpassword" onChange={onChange}  placeholder="confirm Password" minLength={5} required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
