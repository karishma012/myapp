import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prevent page from reloading
    const { name, email, password } = credentials;

    // API call
    const response = await fetch("http://localhost:3500/api/auth/createuser", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      navigate("/");
      props.showalert("Account created Successfully", "success");
    } else {
      props.showalert("Invalid details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
          <div className="my-4">
        <h1 className="block text-4xl font-bold mb-2 underline justify-center">Create an Account</h1>
      </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" onChange={onChange} placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={onChange} placeholder="Enter your email" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="Password" name="password" onChange={onChange} placeholder="Enter your password" minLength={5} required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} placeholder="Confirm your password" minLength={5} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
