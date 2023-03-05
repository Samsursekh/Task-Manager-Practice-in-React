import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import TaskPage from './TaskPage';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/task' element={<TaskPage />} />
    </Routes>

  )
}

export default AllRoutes