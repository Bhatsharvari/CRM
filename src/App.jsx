import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
// import Signup from './Signup';
import './Global.css'
import About from './About';
import Page from './Page';
import SliderPage from './SliderPage'


const App = () => {
    
  return (
    <div>
        
        <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        {/* <Route path="/Signup" element={<Signup/>} /> */}
        <Route path="/About" element={<About/>} />
        <Route path="/Page" element={<Page/>} />
        <Route path="/SliderPage" element={<SliderPage/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App