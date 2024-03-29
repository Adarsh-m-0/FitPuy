import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BMICalculator from './pages/BMICalculator';
import Home from './pages/Home'; 
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/" element={<Home />} /> {/* Default route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
