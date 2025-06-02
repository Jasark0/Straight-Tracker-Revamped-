import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home"
import Tracker from "./pages/Tracker"

const routes: React.FC = () =>{

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tracker" element={<Tracker/>} />
      </Routes>
    </Router>
  )
}

export default routes
