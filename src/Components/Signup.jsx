import React, { useState } from "react";
import "../Components/Style.css";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');


    const handleSubmit = async(e) => {
      e.preventDefault();
      
      // console.log(email,password,userName,confirm);

      let userData = {
        email: email, 
        userName: userName,
        password : password,
        confirmPassword: confirm
      }

      const res = await fetch(`http://localhost:8000/user`, {
        method : "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(userData)
      })
     const data = await res.json();
     console.log(data);
    }
  return (
    <div>
      <h3>Sign up</h3>
      <form action="" id="mySignupForm" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email Here"
          required
          id="email"
          value={email}
          onChange={(e) => 
            setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter UserName Here"
          id="userName"
          required
          value={userName}
          onChange={(e) => 
            setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password Here"
          id="password"
          required
          value={password}
          onChange={(e) => 
            setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Confirm Password Here"
          id="confirm"
          required
          value={confirm}
          onChange={(e) => 
            setConfirm(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Signup;
