import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Select from "./pages/Select"
import Tracker from "./pages/Tracker"

const routes: React.FC = () =>{

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/select" element={<Select/>} />
        <Route path="/tracker" element={<Tracker/>} />
      </Routes>
    </Router>
  )
}

export default routes
