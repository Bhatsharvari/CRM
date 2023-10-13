import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <div id='welcome'>
        <h2>Welcome Home</h2>
        </div>
        <div>
        <Link to="/Login">Go to Login</Link>
        </div>
       <div>
        <Link to="/About">Go to About</Link>
        </div>
        <div>
        <Link to="/Page">Go to Pagation</Link>
        </div>
        <div>
        <Link to="/SliderPage">Go to Slider</Link>
        </div>
    </div>
  )
}

export default Home