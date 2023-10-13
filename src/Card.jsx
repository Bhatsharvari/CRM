import React from 'react'

const Card = (props) => {
    
  return (
    <div className='parentBlock'>
          <div className='childBlock'>
          <img src={props.payload[0].image} alt="" />
                <h2>{props.payload[0].title}</h2>
                <h3>{props.payload[0].description}</h3>
                
          </div>
          <div className='childBlock'>
          <img src={props.payload[1].image} alt="" />
                <h2>{props.payload[1].title}</h2>
                <h3>{props.payload[1].description}</h3>
                
          </div>
          <div className='childBlock'>
          <img src={props.payload[2].image} alt="" />
                <h2>{props.payload[2].title}</h2>
                <h3>{props.payload[2].description}</h3>
                
          </div>
          <div className='childBlock'>
          <img src={props.payload[3].image} alt="" />
                <h2>{props.payload[3].title}</h2>
                <h3>{props.payload[3].description}</h3>
                
          </div>
    </div>
  )
}

export default Card 




