import React from 'react'
import Card from './Card'
import JSON from './cardData.json'
import { Link } from 'react-router-dom';
// import Pagination from './Pagination';

const About = (props) => {
    
  return (
    <div>
        <Card payload={JSON}/>
        <Link to="/Home">Back to Homepage</Link>
        <br />
        {/* <h1>Paginated Content</h1>
        <Pagination data={data}/> */}
    </div>
  )
}

export default About


