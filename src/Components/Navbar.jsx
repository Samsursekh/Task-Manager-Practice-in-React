import React from 'react';
import { Link } from 'react-router-dom';
import "../Components/Style.css";

const Navbar = () => {
  return (
   <nav>
    <Link to={"/"}><h4>Signup Page</h4></Link>
    <Link to={"/task"}><h4>Task Page</h4></Link> 
    <Link to={"/login"}><h4>Login Page</h4></Link>
   </nav>
  )
}

export default Navbar