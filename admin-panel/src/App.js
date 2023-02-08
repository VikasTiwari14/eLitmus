import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';

const App = () => {
    return (
      <Router>
        <Routes>
        <Route path="dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    ) 
}

export default App