import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Styles from './components/Styles.jsx'
import Landing from './components/Landing.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Resume from './components/Resume.jsx'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/styles' element={<Styles />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
