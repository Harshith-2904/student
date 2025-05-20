import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import StudentDetails from './components/StudentDetails';
import Scholarship from './components/Scholarship';
import Payment from './components/Payment';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/student-details"
            element={isAuthenticated ? <StudentDetails /> : <Navigate to="/login" />}
          />
          <Route
            path="/scholarship"
            element={isAuthenticated ? <Scholarship /> : <Navigate to="/login" />}
          />
          <Route
            path="/payment"
            element={isAuthenticated ? <Payment /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
