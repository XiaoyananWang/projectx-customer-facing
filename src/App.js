import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Account from './pages/Account';
import Threads from './pages/Threads';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
    return (
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/account" element={<Account />} />
              <Route path="/threads" element={<Threads />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      );
}

export default App;
