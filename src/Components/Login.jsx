import React, { useEffect, useState } from "react";
import "../Components/Style.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const getDataFunction = () => {
    fetch('http://localhost:8000/user')
      .then(response => {
        let data = response.json();
        data.then((resDATA) => {
        console.log(resDATA, "Am i getting the data...")
        setUserData(resDATA);
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
  // Make a request to the JSON server to retrieve the user data
  useEffect(() => {
    getDataFunction();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Find the user in the user data with the matching username and password
    const user = userData.find(user => user.userName === userName && user.password === password);

    if (user) {   //sam@123
      setErrorMessage('');
      setSuccess('Login Successfully !'); 

      setTimeout(() => {
       navigate("/task");
      }, 2000);

    } else {
      setErrorMessage('Invalid username or password.');
      setSuccess('');
    }
  }

    
  return (
    <div>
      <h3>Login Page</h3>
      <form action="" id="mySignupForm" onSubmit={handleSubmit}>
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
        <br />
        <input type="submit" value="Submit" />
        {
         errorMessage && errorMessage ? <p style={{color: "red", fontWeight: "700"}}>{"Invalid Credentials !!"}</p>  : ""
        }
        {
         success && success ? <p style={{color: "teal" , fontWeight: "700"}}>{"Login Successfully !!"}</p> : ""
        }
      </form>
    </div>
  );
};

export default Login;
